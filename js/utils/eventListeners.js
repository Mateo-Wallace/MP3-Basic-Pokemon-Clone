let clicked = false;

// listens for player movement input
window.addEventListener("keydown", (e) => {
  if (!clicked) {
    audio.map.play();
    clicked = true;
  }

  if (player.isInteracting) {
    switch (e.key) {
      case " ":
        player.interactionAsset.dialogueIndex++;

        const { dialogueIndex, dialogue } = player.interactionAsset;
        if (dialogueIndex <= dialogue.length - 1) {
          document.querySelector("#characterDialogueBox").innerHTML =
            player.interactionAsset.dialogue[dialogueIndex];
          return;
        }

        // finish conversation
        player.isInteracting = false;
        player.interactionAsset.dialogueIndex = 0;
        document.querySelector("#characterDialogueBox").style.display = "none";
        break;
    }
    return;
  }

  switch (e.key) {
    case "w":
      keys.w.pressed = true;
      break;
    case "a":
      keys.a.pressed = true;
      break;
    case "s":
      keys.s.pressed = true;
      break;
    case "d":
      keys.d.pressed = true;
      break;
    case " ":
      if (!player.interactionAsset) return;

      // beggining the conversation
      const firstMessage = player.interactionAsset.dialogue[0];
      document.querySelector("#characterDialogueBox").innerHTML = firstMessage;
      document.querySelector("#characterDialogueBox").style.display = "flex";
      player.isInteracting = true;
      break;
  }
});
window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
  }
});

window.addEventListener("click", () => {
  if (!clicked) {
    audio.map.play();
    clicked = true;
  }
});
