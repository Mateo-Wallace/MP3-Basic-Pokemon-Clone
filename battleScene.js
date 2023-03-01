// loads all battle images
const battleBackgroundImage = new Image();
battleBackgroundImage.src = config.images.battleBackground;
const draggleImage = new Image();
draggleImage.src = config.images.draggle;
const embyImage = new Image();
embyImage.src = config.images.emby;

// loads all battle sprites
const battleBackground = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  image: battleBackgroundImage,
});
const draggle = new Sprite({
  position: {
    x: 800,
    y: 100,
  },
  image: draggleImage,
  frames: {
    max: 4,
    hold: 30,
  },
  animate: true,
  isEnemy: true,
  name: "Draggle",
});
const emby = new Sprite({
  position: {
    x: 280,
    y: 325,
  },
  image: embyImage,
  frames: {
    max: 4,
    hold: 30,
  },
  animate: true,
  name: "Emby",
});

const renderedSprites = [draggle, emby];
const animateBattle = () => {
  window.requestAnimationFrame(animateBattle);
  battleBackground.draw();

  renderedSprites.forEach((sprite) => {
    sprite.draw();
  });
};
config.onlyBattle ? animateBattle() : animate();

const queue = [];

// listens for battle input
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (e) => {
    const selectedAttack = attacks[e.currentTarget.innerHTML];
    emby.attack({
      attack: selectedAttack,
      recipient: draggle,
      renderedSprites,
    });
    queue.push(() => {
      draggle.attack({
        attack:
          Object.values(attacks)[
            Math.floor(Math.random() * Object.values(attacks).length)
          ],
        recipient: emby,
        renderedSprites,
      });
    });
  });
});

document.querySelector("#dialogueBox").addEventListener("click", (e) => {
  if (queue.length > 0) {
    queue[0]();
    queue.shift();
  } else e.currentTarget.style.display = "none";
});
