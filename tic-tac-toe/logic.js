const playerText = document.getElementById("playerText");
const boxes = Array.from(document.getElementsByClassName("box"));
const spaces = Array(9).fill(null);

let winnerIndicator = getComputedStyle(document.body).getPropertyValue("--winning-blocks");

const O_TEXT = "O";
const X_TEXT = "X";
const WINNING_COMBO = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let CURRENT_PLAYER = O_TEXT;

function startGame() {
  boxes.forEach((box) => {
    box.addEventListener("click", boxClicked);
  });
}

function boxClicked(e) {
  const id = e.target.id;
  if (!spaces[id]) {
    spaces[id] = CURRENT_PLAYER;
    e.target.innerText = CURRENT_PLAYER;

    if (playerHasWon() !== false) {
      playerText.innerHTML = `${CURRENT_PLAYER} has won!`;
      let winning_blocks = playerHasWon();

      winning_blocks.map((box) => (boxes[box].style.backgroundColor = winnerIndicator));

      boxes.forEach((box) => {
        box.removeEventListener("click", boxClicked);
      });

      return;
    }

    CURRENT_PLAYER = CURRENT_PLAYER == O_TEXT ? X_TEXT : O_TEXT;
  }
}

function playerHasWon() {
  for (const condition of WINNING_COMBO) {
    let [a, b, c] = condition;

    if (spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]) {
      return [a, b, c];
    }
  }
  return false;
}

document.getElementById("restartBtn").addEventListener("click", restartGame);

function restartGame() {
  CURRENT_PLAYER = O_TEXT;
  spaces.fill(null);

  boxes.forEach((box) => {
    box.innerText = "";
    box.style.backgroundColor = "";
  });

  playerText.innerText = "tic tac toe";
  startGame();
}

startGame();
