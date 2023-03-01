const audio = {
  map: new Howl({
    src: config.audio.map,
    html5: true,
    volume: config.game.musicVolume,
  }),
  initBattle: new Howl({
    src: config.audio.initBattle,
    html5: true,
    volume: config.game.musicVolume,
  }),
  battle: new Howl({
    src: config.audio.battle,
    html5: true,
    volume: config.game.musicVolume,
  }),
  tackleHit: new Howl({
    src: config.audio.tackleHit,
    html5: true,
    volume: config.game.musicVolume,
  }),
  fireballHit: new Howl({
    src: config.audio.fireballHit,
    html5: true,
    volume: config.game.musicVolume,
  }),
  initFireball: new Howl({
    src: config.audio.initFireball,
    html5: true,
    volume: config.game.musicVolume,
  }),
  victory: new Howl({
    src: config.audio.victory,
    html5: true,
    volume: config.game.musicVolume,
  }),
};
