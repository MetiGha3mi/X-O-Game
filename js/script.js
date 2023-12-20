"use strict";

const dosIndex = document.querySelectorAll(".dos-index");
const playerScore = document.querySelectorAll(".player-score");
const resetGamebtn = document.querySelector(".reset-btn");
const xIndexOne = document.querySelector(".x-index-1");
const xIndexTwo = document.querySelector(".x-index-2");
const xIndexThree = document.querySelector(".x-index-3");
const xIndexFour = document.querySelector(".x-index-4");
const xIndexFive = document.querySelector(".x-index-5");
const xIndexSix = document.querySelector(".x-index-6");
const xIndexSeven = document.querySelector(".x-index-7");
const xIndexEight = document.querySelector(".x-index-8");
const xIndexNine = document.querySelector(".x-index-9");
const oIndexOne = document.querySelector(".o-index-1");
const oIndexTwo = document.querySelector(".o-index-2");
const oIndexThree = document.querySelector(".o-index-3");
const oIndexFour = document.querySelector(".o-index-4");
const oIndexFive = document.querySelector(".o-index-5");
const oIndexSix = document.querySelector(".o-index-6");
const oIndexSeven = document.querySelector(".o-index-7");
const oIndexEight = document.querySelector(".o-index-8");
const oIndexNine = document.querySelector(".o-index-9");

for (let i = 0; i < dosIndex; i++) {
  dosIndex.addEventListener("click", () => {
    console.log("hi");
  });
}
let gameCells;
let gameCondition;
let gameFinishing;
let redPlayerScore = 0;
let bluePlayerScore = 0;
function resetGame() {
  gameCells = [
    "none 1",
    "none 2",
    "none 3",
    "none 4",
    "none 5",
    "none 6",
    "none 7",
    "none 8",
    "none 9",
  ];
  gameCondition = "X";
  gameFinishing = false;
  xIndexOne.classList.remove("game-on");
  xIndexTwo.classList.remove("game-on");
  xIndexThree.classList.remove("game-on");
  xIndexFour.classList.remove("game-on");
  xIndexFive.classList.remove("game-on");
  xIndexSix.classList.remove("game-on");
  xIndexSeven.classList.remove("game-on");
  xIndexEight.classList.remove("game-on");
  xIndexNine.classList.remove("game-on");
  oIndexOne.classList.remove("game-on");
  oIndexTwo.classList.remove("game-on");
  oIndexThree.classList.remove("game-on");
  oIndexFour.classList.remove("game-on");
  oIndexFive.classList.remove("game-on");
  oIndexSix.classList.remove("game-on");
  oIndexSeven.classList.remove("game-on");
  oIndexEight.classList.remove("game-on");
  oIndexNine.classList.remove("game-on");
}
resetGame();

function winGame() {
  if (gameCells[0] === "x" && gameCells[1] === "x" && gameCells[2] === "x") {
    bluePlayerScore++;
    playerScore[1].textContent = bluePlayerScore;
    gameFinishing = true;
  }
  if (gameCells[0] === "o" && gameCells[1] === "o" && gameCells[2] === "o") {
    redPlayerScore++;
    playerScore[0].textContent = redPlayerScore;
    gameFinishing = true;
  }
  if (gameCells[3] === "x" && gameCells[4] === "x" && gameCells[5] === "x") {
    bluePlayerScore++;
    playerScore[1].textContent = bluePlayerScore;
    gameFinishing = true;
  }
  if (gameCells[3] === "o" && gameCells[4] === "o" && gameCells[5] === "o") {
    redPlayerScore++;
    playerScore[0].textContent = redPlayerScore;
    gameFinishing = true;
  }
  if (gameCells[6] === "x" && gameCells[7] === "x" && gameCells[8] === "x") {
    bluePlayerScore++;
    playerScore[1].textContent = bluePlayerScore;
    gameFinishing = true;
  }
  if (gameCells[6] === "o" && gameCells[7] === "o" && gameCells[8] === "o") {
    redPlayerScore++;
    playerScore[0].textContent = redPlayerScore;
    gameFinishing = true;
  }
  if (gameCells[0] === "x" && gameCells[3] === "x" && gameCells[6] === "x") {
    bluePlayerScore++;
    playerScore[1].textContent = bluePlayerScore;
    gameFinishing = true;
  }
  if (gameCells[0] === "o" && gameCells[3] === "o" && gameCells[6] === "o") {
    redPlayerScore++;
    playerScore[0].textContent = redPlayerScore;
    gameFinishing = true;
  }
  if (gameCells[1] === "x" && gameCells[4] === "x" && gameCells[7] === "x") {
    bluePlayerScore++;
    playerScore[1].textContent = bluePlayerScore;
    gameFinishing = true;
  }
  if (gameCells[1] === "o" && gameCells[4] === "o" && gameCells[7] === "o") {
    redPlayerScore++;
    playerScore[0].textContent = redPlayerScore;
    gameFinishing = true;
  }
  if (gameCells[2] === "x" && gameCells[5] === "x" && gameCells[8] === "x") {
    bluePlayerScore++;
    playerScore[1].textContent = bluePlayerScore;
    gameFinishing = true;
  }
  if (gameCells[2] === "o" && gameCells[5] === "o" && gameCells[8] === "o") {
    redPlayerScore++;
    playerScore[0].textContent = redPlayerScore;
    gameFinishing = true;
  }
  if (gameCells[0] === "x" && gameCells[4] === "x" && gameCells[8] === "x") {
    bluePlayerScore++;
    playerScore[1].textContent = bluePlayerScore;
    gameFinishing = true;
  }
  if (gameCells[0] === "o" && gameCells[4] === "o" && gameCells[8] === "o") {
    redPlayerScore++;
    playerScore[0].textContent = redPlayerScore;
    gameFinishing = true;
  }
  if (gameCells[2] === "x" && gameCells[4] === "x" && gameCells[6] === "x") {
    bluePlayerScore++;
    playerScore[1].textContent = bluePlayerScore;
    gameFinishing = true;
  }
  if (gameCells[2] === "o" && gameCells[4] === "o" && gameCells[6] === "o") {
    redPlayerScore++;
    playerScore[0].textContent = redPlayerScore;
    gameFinishing = true;
  }
}

dosIndex[0].addEventListener("click", () => {
  if (gameFinishing !== true) {
    if (gameCells[0] === "none 1") {
      if (gameCondition === "X") {
        console.log("X index 1");
        xIndexOne.classList.add("game-on");
        gameCells[0] = "x";
        gameCondition = "O";
        winGame();
      } else if (gameCondition === "O") {
        console.log("O index 1");
        oIndexOne.classList.add("game-on");
        gameCells[0] = "o";
        gameCondition = "X";
        winGame();
      }
    }
  }
});
dosIndex[1].addEventListener("click", () => {
  if (gameFinishing !== true) {
    if (gameCells[1] === "none 2") {
      if (gameCondition === "X") {
        console.log("X index 2");
        xIndexTwo.classList.add("game-on");
        gameCells[1] = "x";
        gameCondition = "O";
        winGame();
      } else if (gameCondition === "O") {
        console.log("O index 2");
        oIndexTwo.classList.add("game-on");
        gameCells[1] = "o";
        gameCondition = "X";
        winGame();
      }
    }
  }
});
dosIndex[2].addEventListener("click", () => {
  if (gameFinishing !== true) {
    if (gameCells[2] === "none 3") {
      if (gameCondition === "X") {
        console.log("X index 3");
        xIndexThree.classList.add("game-on");
        gameCells[2] = "x";
        gameCondition = "O";
        winGame();
      } else if (gameCondition === "O") {
        console.log("O index 3");
        oIndexThree.classList.add("game-on");
        gameCells[2] = "o";
        gameCondition = "X";
        winGame();
      }
    }
  }
});
dosIndex[3].addEventListener("click", () => {
  if (gameFinishing !== true) {
    if (gameCells[3] === "none 4") {
      if (gameCondition === "X") {
        console.log("X index 4");
        xIndexFour.classList.add("game-on");
        gameCells[3] = "x";
        gameCondition = "O";
        winGame();
      } else if (gameCondition === "O") {
        console.log("O index 4");
        oIndexFour.classList.add("game-on");
        gameCells[3] = "o";
        gameCondition = "X";
        winGame();
      }
    }
  }
});
dosIndex[4].addEventListener("click", () => {
  if (gameFinishing !== true) {
    if (gameCells[4] === "none 5") {
      if (gameCondition === "X") {
        console.log("X index 5");
        xIndexFive.classList.add("game-on");
        gameCells[4] = "x";
        gameCondition = "O";
        winGame();
      } else if (gameCondition === "O") {
        console.log("O index 5");
        oIndexFive.classList.add("game-on");
        gameCells[4] = "o";
        gameCondition = "X";
        winGame();
      }
    }
  }
});
dosIndex[5].addEventListener("click", () => {
  if (gameFinishing !== true) {
    if (gameCells[5] === "none 6") {
      if (gameCondition === "X") {
        console.log("X index 6");
        xIndexSix.classList.add("game-on");
        gameCells[5] = "x";
        gameCondition = "O";
        winGame();
      } else if (gameCondition === "O") {
        console.log("O index 6");
        oIndexSix.classList.add("game-on");
        gameCells[5] = "o";
        gameCondition = "X";
        winGame();
      }
    }
  }
});
dosIndex[6].addEventListener("click", () => {
  if (gameFinishing !== true) {
    if (gameCells[6] === "none 7") {
      if (gameCondition === "X") {
        console.log("X index 7");
        xIndexSeven.classList.add("game-on");
        gameCells[6] = "x";
        gameCondition = "O";
        winGame();
      } else if (gameCondition === "O") {
        console.log("O index 7");
        oIndexSeven.classList.add("game-on");
        gameCells[6] = "o";
        gameCondition = "X";
        winGame();
      }
    }
  }
});
dosIndex[7].addEventListener("click", () => {
  if (gameFinishing !== true) {
    if (gameCells[7] === "none 8") {
      if (gameCondition === "X") {
        console.log("X index 8");
        xIndexEight.classList.add("game-on");
        gameCells[7] = "x";
        gameCondition = "O";
        winGame();
      } else if (gameCondition === "O") {
        console.log("O index 8");
        oIndexEight.classList.add("game-on");
        gameCells[7] = "o";
        gameCondition = "X";
        winGame();
      }
    }
  }
});
dosIndex[8].addEventListener("click", () => {
  if (gameFinishing !== true) {
    if (gameCells[8] === "none 9") {
      if (gameCondition === "X") {
        console.log("X index 9");
        xIndexNine.classList.add("game-on");
        gameCells[8] = "x";
        gameCondition = "O";
        winGame();
      } else if (gameCondition === "O") {
        console.log("O index 9");
        oIndexNine.classList.add("game-on");
        gameCells[8] = "o";
        gameCondition = "X";
        winGame();
      }
    }
  }
});

resetGamebtn.addEventListener("click", resetGame);
