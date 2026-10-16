const gamePlatform = document.querySelector(".gamePlatform");
const boxes = Array.from(document.querySelectorAll(".boxes"));
const gameStatus = document.querySelector("#game-status");
const congratsPopup = document.querySelector(".congrats");
const winnerText = document.querySelector(".winner-text");
const resultOkButton = document.querySelector("#result-ok");
const newGameButton = document.querySelector("#new-game");
const resetScoresButton = document.querySelector("#reset-scores");
const scoreElements = {
    X: document.querySelector("#score-x"),
    O: document.querySelector("#score-o"),
    draws: document.querySelector("#score-draws"),
};

const SCORE_STORAGE_KEY = "tic-tac-toe-scores-v1";
const WINNING_LINES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
];

let board = createEmptyBoard();
let player = "X";
let gameOver = false;
let scores = loadScores();

renderScores();
renderTurnStatus();

function createEmptyBoard() {
    return Array(9).fill(null);
}

function loadScores() {
    const emptyScores = { X: 0, O: 0, draws: 0 };

    try {
        const saved = JSON.parse(localStorage.getItem(SCORE_STORAGE_KEY));
        if (!saved || typeof saved !== "object") return emptyScores;

        return Object.fromEntries(
            Object.keys(emptyScores).map((key) => {
                const value = saved[key];
                return [key, Number.isSafeInteger(value) && value >= 0 ? value : 0];
            }),
        );
    } catch {
        // The game still works when browser storage is unavailable.
        return emptyScores;
    }
}

function saveScores() {
    try {
        localStorage.setItem(SCORE_STORAGE_KEY, JSON.stringify(scores));
    } catch {
        // Private browsing or browser policies may disable storage.
    }
}

function renderScores() {
    scoreElements.X.textContent = scores.X;
    scoreElements.O.textContent = scores.O;
    scoreElements.draws.textContent = scores.draws;
}

function renderTurnStatus() {
    gameStatus.textContent = gameOver
        ? "Game over. Choose New game to play again."
        : `Player ${player}'s turn`;
}

gamePlatform.addEventListener("click", (event) => {
    const box = event.target.closest(".boxes");
    if (!box || gameOver || !gamePlatform.contains(box)) return;

    const index = boxes.indexOf(box);
    if (index < 0 || board[index] !== null) return;

    board[index] = player;
    box.textContent = player;
    box.classList.add(player.toLowerCase());
    box.setAttribute("aria-label", `Row ${Math.floor(index / 3) + 1}, column ${(index % 3) + 1}, ${player}`);
    box.setAttribute("aria-pressed", "true");

    const winningLine = findWinningLine(player);
    if (winningLine) {
        winningLine.forEach((winningIndex) => boxes[winningIndex].classList.add("winning-cell"));
        finishGame(`Player ${player} wins!`, "win", player);
        return;
    }

    if (board.every((cell) => cell !== null)) {
        finishGame("It's a draw!", "draw");
        return;
    }

    player = player === "X" ? "O" : "X";
    renderTurnStatus();
});

gamePlatform.addEventListener("keydown", (event) => {
    const box = event.target.closest(".boxes");
    if (!box) return;

    const index = boxes.indexOf(box);
    const row = Math.floor(index / 3);
    const col = index % 3;
    const moves = {
        ArrowUp: [row - 1, col],
        ArrowDown: [row + 1, col],
        ArrowLeft: [row, col - 1],
        ArrowRight: [row, col + 1],
    };

    if (!moves[event.key]) return;
    const [nextRow, nextCol] = moves[event.key];
    if (nextRow < 0 || nextRow > 2 || nextCol < 0 || nextCol > 2) return;

    event.preventDefault();
    boxes[nextRow * 3 + nextCol].focus();
});

function findWinningLine(mark) {
    return WINNING_LINES.find((line) => line.every((index) => board[index] === mark)) ?? null;
}

function finishGame(message, result, winner = null) {
    gameOver = true;
    boxes.forEach((box) => { box.disabled = true; });

    if (winner) scores[winner] += 1;
    else if (result === "draw") scores.draws += 1;

    saveScores();
    renderScores();
    gameStatus.textContent = message;
    winnerText.textContent = message;
    document.querySelector("#result-description").textContent =
        result === "draw"
            ? "No winner this round. Start another game and try again."
            : `Well played, Player ${winner}! Start another round whenever you're ready.`;

    if (!congratsPopup.open) congratsPopup.showModal();
    resultOkButton.focus();
}

function closeResultAndStartNewGame() {
    if (congratsPopup.open) congratsPopup.close();
    resetGame();
    boxes[0].focus();
}

function resetGame() {
    board = createEmptyBoard();
    player = "X";
    gameOver = false;

    boxes.forEach((box) => {
        box.textContent = "";
        box.disabled = false;
        box.classList.remove("x", "o", "winning-cell");
        box.setAttribute(
            "aria-label",
            `Row ${Number(box.dataset.row) + 1}, column ${Number(box.dataset.col) + 1}, empty`,
        );
        box.setAttribute("aria-pressed", "false");
    });

    winnerText.textContent = "";
    renderTurnStatus();
}

newGameButton.addEventListener("click", () => {
    if (congratsPopup.open) congratsPopup.close();
    resetGame();
});

resultOkButton.addEventListener("click", closeResultAndStartNewGame);

// Escape dismisses the result and starts a fresh round.
congratsPopup.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeResultAndStartNewGame();
});

resetScoresButton.addEventListener("click", () => {
    scores = { X: 0, O: 0, draws: 0 };
    saveScores();
    renderScores();
    gameStatus.textContent = gameOver
        ? "Scores reset. Choose New game to play again."
        : `Scores reset. Player ${player}'s turn`;
});
