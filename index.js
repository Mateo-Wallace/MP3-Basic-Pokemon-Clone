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
// loads the player model
const playerImage = new Image();
playerImage.src = "./img/playerDown.png";

// sets a class for images to animate
class Sprite {
  constructor({ position, velocity, image, frames = { max: 1 } }) {
    this.position = position;
    this.image = image;
    this.frames = frames;
  }

  draw() {
    c.drawImage(
      this.image,
      0,
      0,
      this.image.width / this.frames.max,
      this.image.height,
      this.position.x,
      this.position.y,
      this.image.width / this.frames.max,
      this.image.height
    );
  }
}

const player = new Sprite({
  position: {
    x: canvas.width / 2 - 192 / 4 / 2,
    y: canvas.height / 2 - 68 / 2,
  },
  image: playerImage,
  frames: {
    max: 4,
  },
});

// defines the background image as a sprite
const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: mapImage,
});

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

const testBoundary = new Boundary({
  position: {
    x: 400,
    y: 400,
  },
});

const movables = [background, testBoundary];

// callback function onself that constantly reloads the screen based on player input
const animate = () => {
  window.requestAnimationFrame(animate);
  // draws map on screen
  background.draw();

  // draws each boundary on screen
  //   boundaries.forEach((boundary) => {
  //     boundary.draw();
  //   });

  testBoundary.draw();
  // draws player on screen
  player.draw();

  //   if (playerImage.)

  // adjusts moveables position based on movement input
  if (keys.w.pressed && lastKey === "w")
    movables.forEach((moveable) => {
      moveable.position.y += 3;
    });
  else if (keys.a.pressed && lastKey === "a")
    movables.forEach((moveable) => {
      moveable.position.x += 3;
    });
  else if (keys.s.pressed && lastKey === "s")
    movables.forEach((moveable) => {
      moveable.position.y -= 3;
    });
  else if (keys.d.pressed && lastKey === "d")
    movables.forEach((moveable) => {
      moveable.position.x -= 3;
    });
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
