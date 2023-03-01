// gets the html for the screen
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

// determines size for game window
canvas.width = 1024;
canvas.height = 576;

// sets position for collisions that block player
const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 70) {
  collisionsMap.push(collisions.slice(i, 70 + i));
}

// defines what a boundary is
class Boundary {
  static width = 48;
  static height = 48;
  constructor({ position }) {
    this.position = position;
    this.width = 48;
    this.height = 48;
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

// array to hold every row of boundaries
const boundaries = [];
const offset = {
  x: -735,
  y: -650,
};

// pushes each row of boundaries into an array with defined positioning
collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
        })
      );
  });
});

// loads the map
const mapImage = new Image();
mapImage.src = "./img/Pellet-Town-Zoom-Help.png";

// sets a class for images to animate
class Sprite {
  constructor({ position, velocity, image }) {
    this.position = position;
    this.image = image;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

// defines the background image as a sprite
const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: mapImage,
});

// loads the player model
const playerImage = new Image();
playerImage.src = "./img/playerDown.png";

// tracks whether a key has been pressed
const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

// callback function onself that constantly reloads the screen based on player input
const animate = () => {
  window.requestAnimationFrame(animate);
  // draws map on screen
  background.draw();

  // draws each boundary on screen
  boundaries.forEach((boundary) => {
    boundary.draw();
  });

  // draws player on screen
  c.drawImage(
    playerImage,
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    canvas.width / 2 - playerImage.width / 4 / 2,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height
  );

  // adjusts background position based on movement input
  if (keys.w.pressed && lastKey === "w") background.position.y += 3;
  else if (keys.a.pressed && lastKey === "a") background.position.x += 3;
  else if (keys.s.pressed && lastKey === "s") background.position.y -= 3;
  else if (keys.d.pressed && lastKey === "d") background.position.x -= 3;
};
animate();

// listens for player movement input
let lastKey = "";
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = true;
      lastKey = "w";
      break;
    case "a":
      keys.a.pressed = true;
      lastKey = "a";
      break;
    case "s":
      keys.s.pressed = true;
      lastKey = "s";
      break;
    case "d":
      keys.d.pressed = true;
      lastKey = "d";
      break;
  }
});
window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
  }
});
