const audio = {
  map: new Howl({
    src: config.audio.map,
    html5: true,
    volume: 0.3,
  }),
  initBattle: new Howl({
    src: config.audio.initBattle,
    html5: true,
    volume: 0.1,
  }),
  battle: new Howl({
    src: config.audio.battle,
    html5: true,
    volume: 0.1,
  }),
  tackleHit: new Howl({
    src: config.audio.tackleHit,
    html5: true,
    volume: 0.1,
  }),
  fireballHit: new Howl({
    src: config.audio.fireballHit,
    html5: true,
    volume: 0.1,
  }),
  initFireball: new Howl({
    src: config.audio.initFireball,
    html5: true,
    volume: 0.1,
  }),
};
