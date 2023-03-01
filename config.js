const config = {
  showBoundaries: 1,
  onlyBattle: 0,

  game: {
    encounterRatePercentage: 50, // default 1.5
    tackleDam: 10, // default 10
    fireBallDam: 100, // default 25
  },

  images: {
    map: "./img/Pellet-Town-Zoom-Help.png",
    foregroundObjects: "./img/foregroundObjects.png",

    playerDown: "./img/playerDown.png",
    playerUp: "./img/playerUp.png",
    playerRight: "./img/playerRight.png",
    playerLeft: "./img/playerLeft.png",

    battleBackground: "./img/battleBackground.png",
    draggle: "./img/draggleSprite.png",
    emby: "./img/embySprite.png",
    fireball: "./img/fireball.png",
  },

  audio: {
    map: "./audio/map.wav",
    initBattle: "./audio/initBattle.wav",
    battle: "./audio/battle.mp3",
    tackleHit: "./audio/tackleHit.wav",
    initFireball: "./audio/initFireball.wav",
    fireballHit: "./audio/fireballHit.wav",
    victory: "./audio/victory.wav",
  },
};
