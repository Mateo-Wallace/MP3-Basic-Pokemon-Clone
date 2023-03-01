// loads all battle images
const battleBackgroundImage = new Image();
battleBackgroundImage.src = config.images.battleBackground;

// loads all battle sprites
const battleBackground = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  image: battleBackgroundImage,
});
const draggle = new Monster(monsters.Draggle);
const emby = new Monster(monsters.Emby);

const renderedSprites = [draggle, emby];
const button = document.createElement('button')
button.innerHTML = 'Fireball'
document.querySelector('#attacksBox').append(button)

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
