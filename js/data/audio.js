const volume = config.game.musicVolume;

const audio = {
  map: new Howl({
    src: config.audio.map,
    html5: true,
    volume,
  }),
  initBattle: new Howl({
    src: config.audio.initBattle,
    html5: true,
    volume,
  }),
  battle: new Howl({
    src: config.audio.battle,
    html5: true,
    volume,
  }),
  tackleHit: new Howl({
    src: config.audio.tackleHit,
    html5: true,
    volume,
  }),
  fireballHit: new Howl({
    src: config.audio.fireballHit,
    html5: true,
    volume,
  }),
  initFireball: new Howl({
    src: config.audio.initFireball,
    html5: true,
    volume,
  }),
  heal: new Howl({
    src: config.audio.heal,
    html5: true,
    volume,
  }),
  disintegrate: new Howl({
    src: config.audio.disintegrate,
    html5: true,
    volume,
  }),
  victory: new Howl({
    src: config.audio.victory,
    html5: true,
    volume,
  }),
};
