const gamePlatform = document.querySelector(".gamePlatform");
const boxes = document.querySelectorAll(".boxes");
const congratsPopup = document.querySelector(".congrats");
const winnerText = document.querySelector(".winner-text");

let player = "X";
let gameOver = false;
let board = createEmptyBoard();

function createEmptyBoard() {
    return Array.from({ length: 3 }, () => Array(3).fill(null));
}

gamePlatform.addEventListener("click", (event) => {
    const box = event.target.closest(".boxes");
    if (!box || gameOver || !gamePlatform.contains(box)) return;

    const row = Number(box.dataset.row);
    const col = Number(box.dataset.col);
    if (board[row][col] !== null) return;

    board[row][col] = player;
    box.textContent = player;
    box.setAttribute("aria-label", `Row ${row + 1}, column ${col + 1}: ${player}`);

    const currentPlayer = player;
    if (checkWinner(row, col, currentPlayer)) {
        endGame(`Player ${currentPlayer} Wins!`);
        return;
    }

    if (board.every((boardRow) => boardRow.every((cell) => cell !== null))) {
        endGame("It's a draw!");
        return;
    }

    player = player === "X" ? "O" : "X";
});

function checkWinner(row, col, mark) {
    return (
        board[row].every((cell) => cell === mark) ||
        board.every((boardRow) => boardRow[col] === mark) ||
        (row === col && board.every((boardRow, index) => boardRow[index] === mark)) ||
        (row + col === 2 && board.every((boardRow, index) => boardRow[2 - index] === mark))
    );
}

function endGame(message) {
    gameOver = true;
    boxes.forEach((box) => { box.disabled = true; });
    winnerText.textContent = message;
    congratsPopup.classList.add("winner");
}

function closeButton() {
    congratsPopup.classList.remove("winner");
    resetGame();
}

function resetGame() {
    board = createEmptyBoard();
    player = "X";
    gameOver = false;

    boxes.forEach((box) => {
        box.textContent = "";
        box.disabled = false;
        box.removeAttribute("aria-label");
    });

    winnerText.textContent = "";
}
