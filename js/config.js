const config = {
  dev: {
    showBoundaries: 0,
    onlyBattle: 0,
    showController: 0,
  },

  game: {
    musicVolume: 0.1, //default 0.1
    encounterRatePercentage: 1.5, // default 1.5
    tackleDam: 10, // default 10
    fireBallDam: 25, // default 25
    disintegrateDam: 100, // default 100. instakill
    healDam: 10, //default -10
  },

  npcDialogue: {
    oldMan: [
      "Isn't Copa wonderful this time of year~",
      "Now if only I could find Lola...",
    ],
    villager: ["...", "I could have sworn a saw a thread around here...", "AAAH! Don't sneak up on me like that!"],
  },

  images: {
    map: "./assets/img/Pellet-Town-Zoom-Help.png",
    foregroundObjects: "./assets/img/foregroundObjects.png",

    playerDown: "./assets/img/playerDown.png",
    playerUp: "./assets/img/playerUp.png",
    playerRight: "./assets/img/playerRight.png",
    playerLeft: "./assets/img/playerLeft.png",
    villager: "./assets/img/villager.png",
    oldMan: "./assets/img/oldMan.png",

    battleBackground: "./assets/img/battleBackground.png",
    draggle: "./assets/img/draggleSprite.png",
    emby: "./assets/img/embySprite.png",
    fireball: "./assets/img/fireball.png",
    disintegrate: "./assets/img/disintegrate.png",
    heal: "./assets/img/heal.png",
  },

  audio: {
    map: "./assets/audio/map.wav",
    initBattle: "./assets/audio/initBattle.wav",
    battle: "./assets/audio/battle.mp3",
    tackleHit: "./assets/audio/tackleHit.wav",
    initFireball: "./assets/audio/initFireball.wav",
    fireballHit: "./assets/audio/fireballHit.wav",
    heal: "./assets/audio/heal.mp3",
    disintegrate: "./assets/audio/disintegrate.mp3",
    victory: "./assets/audio/victory.wav",
  },
};
