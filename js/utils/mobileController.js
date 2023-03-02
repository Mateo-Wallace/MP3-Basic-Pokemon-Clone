document.querySelectorAll(".controller").forEach((button) => {
  button.addEventListener("pointerdown", (e) => {
    if (player.isInteracting) {
      switch (e.target.innerHTML.trim()) {
        case "Space":
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
          document.querySelector("#characterDialogueBox").style.display =
            "none";
          break;
      }
      return;
    }

    switch (e.target.innerHTML.trim()) {
      case "W":
        keys.w.pressed = true;
        break;
      case "A":
        keys.a.pressed = true;
        break;
      case "S":
        keys.s.pressed = true;
        break;
      case "D":
        keys.d.pressed = true;
        break;
      case "Space":
        if (!player.interactionAsset) return;

        // beggining the conversation
        const firstMessage = player.interactionAsset.dialogue[0];
        document.querySelector("#characterDialogueBox").innerHTML =
          firstMessage;
        document.querySelector("#characterDialogueBox").style.display = "flex";
        player.isInteracting = true;
        break;
    }
  });
});

document.querySelectorAll(".controller").forEach((button) => {
  button.addEventListener("pointerup", (e) => {
    switch (e.target.innerHTML.trim()) {
      case "W":
        keys.w.pressed = false;
        break;
      case "A":
        keys.a.pressed = false;
        break;
      case "S":
        keys.s.pressed = false;
        break;
      case "D":
        keys.d.pressed = false;
        break;
    }
  });
});
