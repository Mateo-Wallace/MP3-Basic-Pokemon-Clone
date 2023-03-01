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

emby.attacks.forEach((attack) => {
  const button = document.createElement("button");
  button.innerHTML = attack.name;
  document.querySelector("#attacksBox").append(button);
});

let battleAnimationId;

const animateBattle = () => {
  battleAnimationId = window.requestAnimationFrame(animateBattle);
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
    // player attacks
    const selectedAttack = attacks[e.currentTarget.innerHTML];
    emby.attack({
      attack: selectedAttack,
      recipient: draggle,
      renderedSprites,
    });

    if (draggle.health <= 0) {
      queue.push(() => {
        draggle.faint();
      });
      queue.push(() => {
        // fade to black
        gsap.to("#overlappingDiv", {
          opacity: 1,
          onComplete: () => {
            cancelAnimationFrame(battleAnimationId);
            animate();
            document.querySelector("#userInterface").style.display = "none";

            gsap.to("#overlappingDiv", {
              opacity: 0,
            });
          },
        });
      });
    }

    // enemy attacks
    const randomAttack =
      draggle.attacks[Math.floor(Math.random() * draggle.attacks.length)];
    queue.push(() => {
      draggle.attack({
        attack: randomAttack,
        recipient: emby,
        renderedSprites,
      });
    });

    if (emby.health <= 0) {
      queue.push(() => {
        emby.faint();
      });
    }
  });

  button.addEventListener("mouseenter", (e) => {
    const selectedAttack = attacks[e.currentTarget.innerHTML];
    document.querySelector("#attackType").innerHTML = selectedAttack.type;
    document.querySelector("#attackType").style.color = selectedAttack.color;
  });
});

document.querySelector("#dialogueBox").addEventListener("click", (e) => {
  if (queue.length > 0) {
    queue[0]();
    queue.shift();
  } else e.currentTarget.style.display = "none";
});
