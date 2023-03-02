// gets the html for the screen
const canvas = document.querySelector("canvas");
const body = document.querySelector("body");
const c = canvas.getContext("2d");
config.dev.showController
  ? ""
  : (document.querySelector("#controllerContainer").style.display = "none");
// determines size for game window
canvas.width = 1024;
canvas.height = 576;

// checks screen size and zooms in to fit any screen
if (
  window.innerHeight == canvas.height * (window.innerHeight / canvas.height) &&
  window.innerWidth > canvas.width * (window.innerHeight / canvas.height)
)
  body.style.zoom = `${(window.innerHeight / canvas.height) * 100 - 5}%`;
else if (
  window.innerHeight > canvas.height * (window.innerHeight / canvas.height) &&
  window.innerWidth == canvas.width * (window.innerHeight / canvas.height)
)
  body.style.zoom = `${(window.innerWidth / canvas.width) * 100 - 5}%`;
else if (
  window.innerHeight < canvas.height * (window.innerHeight / canvas.height) &&
  window.innerWidth == canvas.width * (window.innerHeight / canvas.height)
)
  body.style.zoom = `${(window.innerHeight / canvas.height) * 100 - 5}%`;
else if (
  window.innerHeight == canvas.height * (window.innerHeight / canvas.height) &&
  window.innerWidth < canvas.width * (window.innerHeight / canvas.height)
)
  body.style.zoom = `${(window.innerWidth / canvas.width) * 100 - 5}%`;

