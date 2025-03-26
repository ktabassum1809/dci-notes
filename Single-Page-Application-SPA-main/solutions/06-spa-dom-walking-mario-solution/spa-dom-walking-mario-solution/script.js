// Task 2:
const mario = document.querySelector("#mario");
const imgMario = document.querySelector("#mario>img");
imgMario.src = "./assets/mario-stand.gif";

// Task 3:
function stopMario() {
  imgMario.src = "./assets/mario-stand.gif";
}

// Task 4/5:
function moveMario(event) {
  const currentLeft = parseInt(mario.style.left) || 0;
  if (!imgMario.src.includes("mario-walk.gif")) {
    imgMario.src = "./assets/mario-walk.gif";
  }

  // Task 6/7:
  if (event.key === "ArrowRight") {
    const newLeft = currentLeft + 10;
    mario.style.left = newLeft + "px";
    mario.style.transform = "rotateY(0)";
  } else if (event.key === "ArrowLeft") {
    const newLeft = currentLeft - 10;
    mario.style.left = newLeft + "px";
    mario.style.transform = "rotateY(-180deg)";
  }
}

// Task 5:
document.addEventListener("keydown", moveMario);

// Task 8:
document.addEventListener("keyup", stopMario);
