const config = {
  showBoundaries: 1,
  onlyBattle: 0,
  showController: 0,

  game: {
    musicVolume: 0.1, //default 0.1
    encounterRatePercentage: 1.5, // default 1.5
    tackleDam: 10, // default 10
    fireBallDam: 25, // default 25
    disintegrateDam: 100, // default 100. instakill
    healDam: 10, //default -10
  },

  images: {
    map: "./img/Pellet-Town-Zoom-Help.png",
    foregroundObjects: "./img/foregroundObjects.png",

    playerDown: "./img/playerDown.png",
    playerUp: "./img/playerUp.png",
    playerRight: "./img/playerRight.png",
    playerLeft: "./img/playerLeft.png",
    villager: "./img/villager.png",
    oldMan: "./img/oldMan.png",

    battleBackground: "./img/battleBackground.png",
    draggle: "./img/draggleSprite.png",
    emby: "./img/embySprite.png",
    fireball: "./img/fireball.png",
    disintegrate: "./img/disintegrate.png",
    heal: "./img/heal.png",
  },

  audio: {
    map: "./audio/map.wav",
    initBattle: "./audio/initBattle.wav",
    battle: "./audio/battle.mp3",
    tackleHit: "./audio/tackleHit.wav",
    initFireball: "./audio/initFireball.wav",
    fireballHit: "./audio/fireballHit.wav",
    heal: "./audio/heal.mp3",
    disintegrate: "./audio/disintegrate.mp3",
    victory: "./audio/victory.wav",
  },
};
