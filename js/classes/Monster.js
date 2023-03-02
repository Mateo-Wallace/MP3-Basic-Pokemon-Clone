class Monster extends Sprite {
  constructor({
    position,
    image,
    frames = { max: 1, hold: 10 },
    sprites,
    animate = false,
    rotation = 0,
    isEnemy = false,
    name,
    attacks,
  }) {
    super({ position, image, frames, sprites, animate, rotation });
    this.health = 100;
    this.isEnemy = isEnemy;
    this.name = name;
    this.attacks = attacks;
  }

  attack({ attack, recipient, renderedSprites }) {
    document.querySelector("#dialogueBox").style.display = "block";
    document.querySelector(
      "#dialogueBox"
    ).innerHTML = `<p>${this.name} used ${attack.name}</p> <p>Click...</p>`;

    let rotation = 1;
    if (this.isEnemy) rotation = -2.2;

    let healthBar;

    if (attack.name != "Heal") {
      healthBar = "#enemyHealthBar";
      if (this.isEnemy) healthBar = "#playerHealthBar";
      let hp = Math.max(0, recipient.health - attack.damage);
      recipient.health = hp;
    } else {
      healthBar = "#playerHealthBar";
      if (this.isEnemy) healthBar = "#enemyHealthBar";
      let hp = Math.min(100, this.health + attack.damage);
      this.health = hp;
    }

    switch (attack.name) {
      case "Fireball":
        audio.initFireball.play();
        const fireballImage = new Image();
        fireballImage.src = config.images.fireball;
        const fireball = new Sprite({
          position: { x: this.position.x, y: this.position.y },
          image: fireballImage,
          frames: {
            max: 4,
            hold: 10,
          },
          animate: true,
          rotation,
        });

        renderedSprites.splice(1, 0, fireball);

        gsap.to(fireball.position, {
          x: recipient.position.x,
          y: recipient.position.y,
          onComplete: () => {
            // enemy gets hit
            audio.fireballHit.play();
            gsap.to(healthBar, {
              width: recipient.health + "%",
            });

            gsap.to(recipient.position, {
              x: recipient.position.x + 10,
              yoyo: true,
              repeat: 5,
              duration: 0.08,
            });

            gsap.to(recipient, {
              opacity: 0,
              repeat: 5,
              yoyo: true,
              duration: 0.08,
            });

            renderedSprites.splice(1, 1);
          },
        });
        break;
      case "Tackle":
        const tl = gsap.timeline();

        let movementDistance = 20;
        if (this.isEnemy) movementDistance = -20;

        tl.to(this.position, {
          x: this.position.x - movementDistance,
        })
          .to(this.position, {
            x: this.position.x + movementDistance * 2,
            duration: 0.1,
            onComplete: () => {
              // enemy gets hit
              audio.tackleHit.play();
              gsap.to(healthBar, {
                width: recipient.health + "%",
              });

              gsap.to(recipient.position, {
                x: recipient.position.x + 10,
                yoyo: true,
                repeat: 5,
                duration: 0.08,
              });

              gsap.to(recipient, {
                opacity: 0,
                repeat: 5,
                yoyo: true,
                duration: 0.08,
              });
            },
          })
          .to(this.position, {
            x: this.position.x,
          });
        break;
      case "Heal":
        audio.heal.play();
        const healImage = new Image();
        healImage.src = config.images.heal;
        const heal = new Sprite({
          position: { x: this.position.x, y: this.position.y },
          image: healImage,
          frames: {
            max: 4,
            hold: 10,
          },
          animate: true,
          scale: 3,
        });

        renderedSprites.push(heal);

        gsap.to(heal.position, {
          x: this.position.x,
          y: this.position.y,
          onComplete: () => {
            // user gets healed
            gsap.to(healthBar, {
              width: this.health + "%",
            });

            renderedSprites.pop();
          },
        });
        break;
      case "Disintegrate":
        const disintegrateImage = new Image();
        disintegrateImage.src = config.images.disintegrate;
        const disintegrate = new Sprite({
          position: { x: recipient.position.x, y: recipient.position.y },
          image: disintegrateImage,
          frames: {
            max: 4,
            hold: 10,
          },
          animate: true,
          scale: 3,
        });

        renderedSprites.push(disintegrate);

        gsap.to(disintegrate.position, {
          x: recipient.position.x,
          y: recipient.position.y,
          onComplete: () => {
            // enemy gets hit
            audio.disintegrate.play();
            gsap.to(healthBar, {
              width: recipient.health + "%",
            });

            gsap.to(recipient.position, {
              x: recipient.position.x + 10,
              yoyo: true,
              repeat: 5,
              duration: 0.08,
            });

            gsap.to(recipient, {
              opacity: 0,
              repeat: 5,
              yoyo: true,
              duration: 0.08,
            });

            renderedSprites.pop();
          },
        });
        break;
    }
  }

  faint() {
    document.querySelector(
      "#dialogueBox"
    ).innerHTML = `<p>${this.name} fainted!</p> <p>Click...</p>`;
    gsap.to(this.position, {
      y: this.position.y + 20,
    });
    gsap.to(this, {
      opacity: 0,
      onComplete: () => {
        gsap.to(this.position, {
          y: this.position.y - 20,
        });
      },
    });
    audio.battle.stop();
    audio.victory.play();
  }
}
