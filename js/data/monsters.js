const monsters = {
  Emby: {
    position: {
      x: 280,
      y: 325,
    },
    image: {
      src: config.images.emby,
    },
    frames: {
      max: 4,
      hold: 30,
    },
    animate: true,
    name: "Emby",
    attacks: [
      attacks.Tackle,
      attacks.Fireball,
      attacks.Heal,
      attacks.Disintegrate,
    ],
  },
  Draggle: {
    position: {
      x: 800,
      y: 100,
    },
    image: {
      src: config.images.draggle,
    },
    frames: {
      max: 4,
      hold: 30,
    },
    animate: true,
    isEnemy: true,
    name: "Draggle",
    attacks: [attacks.Tackle, attacks.Fireball, attacks.Heal],
  },
};
