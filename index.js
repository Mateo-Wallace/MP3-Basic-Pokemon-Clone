// gets the html for the screen
const canvas = document.querySelector("canvas");
const body = document.querySelector("body");
const c = canvas.getContext("2d");
// determines size for game window
canvas.width = 1024;
canvas.height = 576;

// checks screen size and zooms in to fit any screen
if (
  window.innerHeight == canvas.height * (window.innerHeight / canvas.height) &&
  window.innerWidth > canvas.width * (window.innerHeight / canvas.height)
)
  body.style.zoom = `${(window.innerHeight / canvas.height) * 100 - 5}%`;
else if (
  window.innerHeight > canvas.height * (window.innerHeight / canvas.height) &&
  window.innerWidth == canvas.width * (window.innerHeight / canvas.height)
)
  body.style.zoom = `${(window.innerWidth / canvas.width) * 100 - 5}%`;
else if (
  window.innerHeight < canvas.height * (window.innerHeight / canvas.height) &&
  window.innerWidth == canvas.width * (window.innerHeight / canvas.height)
)
  body.style.zoom = `${(window.innerHeight / canvas.height) * 100 - 5}%`;
else if (
  window.innerHeight == canvas.height * (window.innerHeight / canvas.height) &&
  window.innerWidth < canvas.width * (window.innerHeight / canvas.height)
)
  body.style.zoom = `${(window.innerWidth / canvas.width) * 100 - 5}%`;

// sets position for collisions that block player
const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 70) {
  collisionsMap.push(collisions.slice(i, 70 + i));
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

const battleZonesMap = [];
for (let i = 0; i < battleZonesData.length; i += 70) {
  battleZonesMap.push(battleZonesData.slice(i, 70 + i));
}
const battleZones = [];
battleZonesMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      battleZones.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
        })
      );
  });
});

const charactersMap = [];
for (let i = 0; i < charactersMapData.length; i += 70) {
  charactersMap.push(charactersMapData.slice(i, 70 + i));
}
const characters = [];
charactersMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    // 1026 = villager
    if (symbol === 1026) {
      characters.push(
        new Sprite({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
          image: {
            src: config.images.villager,
          },
          frames: {
            max: 4,
            hold: 60,
          },
          scale: 3,
          animate: true,
        })
      );
      // 1031 = old man
    } else if (symbol === 1031) {
      characters.push(
        new Sprite({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
          image: {
            src: config.images.oldMan,
          },
          frames: {
            max: 4,
            hold: 60,
          },
          scale: 3,
        })
      );
    }

    if (symbol != 0)
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

const playerDownImage = new Image();
playerDownImage.src = config.images.playerDown;
const playerUpImage = new Image();
playerUpImage.src = config.images.playerUp;
const playerLeftImage = new Image();
playerLeftImage.src = config.images.playerLeft;
const playerRightImage = new Image();
playerRightImage.src = config.images.playerRight;

// loads all overworld sprites
const player = new Sprite({
  position: {
    x: canvas.width / 2 - 192 / 4 / 2,
    y: canvas.height / 2 - 68 / 2,
  },
  image: playerDownImage,
  frames: {
    max: 4,
    hold: 10,
  },
  sprites: {
    up: playerUpImage,
    left: playerLeftImage,
    right: playerRightImage,
    down: playerDownImage,
  },
});
const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: {
    src: config.images.map,
  },
});
const foreground = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: {
    src: config.images.foregroundObjects,
  },
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

// determines what objects move on player key press
const movables = [
  background,
  ...boundaries,
  foreground,
  ...battleZones,
  ...characters,
];
const renderables = [
  background,
  ...boundaries,
  ...battleZones,
  ...characters,
  player,
  foreground,
];

const battle = {
  initiated: false,
};

// callback function onself that constantly reloads the screen based on player input
const animate = () => {
  const animationId = window.requestAnimationFrame(animate);

  // renders all images on screen
  renderables.forEach((renderable) => {
    renderable.draw();
  });

  let moving = true;
  player.animate = false;

  if (battle.initiated) return;
  // activate a battle
  if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
    for (let i = 0; i < battleZones.length; i++) {
      const battleZone = battleZones[i];
      const overlappingArea =
        (Math.min(
          player.position.x + player.width,
          battleZone.position.x + battleZone.width
        ) -
          Math.max(player.position.x, battleZone.position.x)) *
        (Math.min(
          player.position.y + player.height,
          battleZone.position.y + battleZone.height
        ) -
          Math.max(player.position.y, battleZone.position.y));
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: battleZone,
        }) &&
        overlappingArea > (player.width * player.height) / 2 &&
        Math.random() < config.game.encounterRatePercentage / 100
      ) {
        // deactivate current animation loop
        window.cancelAnimationFrame(animationId);
        audio.map.stop();
        audio.initBattle.play();
        audio.battle.play();
        battle.initiated = true;
        // makes screen flash before battle
        gsap.to("#overlappingDiv", {
          opacity: 1,
          repeat: 3,
          yoyo: true,
          duration: 0.4,
          onComplete() {
            gsap.to("#overlappingDiv", {
              opacity: 1,
              duration: 0.4,
              onComplete() {
                // activate new animation loop
                initBattle();
                animateBattle();
                gsap.to("#overlappingDiv", {
                  opacity: 0,
                  duration: 0.4,
                });
              },
            });
          },
        });
        break;
      }
    }
  }

  // adjusts moveables position based on movement input
  if (keys.w.pressed) {
    player.animate = true;
    player.image = player.sprites.up;

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: 3 },
    });

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 3,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }

    if (moving)
      movables.forEach((moveable) => {
        moveable.position.y += 3;
      });
  }
  if (keys.a.pressed) {
    player.animate = true;
    player.image = player.sprites.left;

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 3, y: 0 },
    });

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x + 3,
              y: boundary.position.y,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }

    if (moving)
      movables.forEach((moveable) => {
        moveable.position.x += 3;
      });
  }
  if (keys.s.pressed) {
    player.animate = true;
    player.image = player.sprites.down;

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: -3 },
    });

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 3,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }

    if (moving)
      movables.forEach((moveable) => {
        moveable.position.y -= 3;
      });
  }
  if (keys.d.pressed) {
    player.animate = true;
    player.image = player.sprites.right;

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: -3, y: 0 },
    });

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x - 3,
              y: boundary.position.y,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }

    if (moving)
      movables.forEach((moveable) => {
        moveable.position.x -= 3;
      });
  }
};

let clicked = false;

// listens for player movement input
window.addEventListener("keydown", (e) => {
  if (!clicked) {
    audio.map.play();
    clicked = true;
  }

  switch (e.key) {
    case "w":
      keys.w.pressed = true;
      break;
    case "a":
      keys.a.pressed = true;
      break;
    case "s":
      keys.s.pressed = true;
      break;
    case "d":
      keys.d.pressed = true;
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

document.querySelectorAll(".controller").forEach((button) => {
  button.addEventListener("mouseover", (e) => {
    switch (e.target.innerHTML.trim()) {
      case "W":
        keys.w.pressed = true;
        break;
      case "A":
        keys.a.pressed = true;
        break;
      case "S":
        keys.s.pressed = true;
        break;
      case "D":
        keys.d.pressed = true;
        break;
    }
  });
});

document.querySelectorAll(".controller").forEach((button) => {
  button.addEventListener("mouseout", (e) => {
    switch (e.target.innerHTML.trim()) {
      case "W":
        keys.w.pressed = false;
        break;
      case "A":
        keys.a.pressed = false;
        break;
      case "S":
        keys.s.pressed = false;
        break;
      case "D":
        keys.d.pressed = false;
        break;
    }
  });
});

window.addEventListener("click", () => {
  if (!clicked) {
    audio.map.play();
    clicked = true;
  }
});
