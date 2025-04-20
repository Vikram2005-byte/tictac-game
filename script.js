const gamePlatform = document.querySelector(".gamePlatform");
const boxes = document.querySelectorAll(".boxes");
const congratsPopup = document.querySelector(".congrats");
const winnerText = document.querySelector(".winner-text");

let player = "X";
let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

gamePlatform.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        let row = parseInt(event.target.getAttribute("data-row"));
        let col = parseInt(event.target.getAttribute("data-col"));
        if (board[row][col] !== null) return;
        
        board[row][col] = player;
        event.target.innerText = player;

        let currentPlayer = player;  

        if (checkWinner(row, col, currentPlayer)) {
            setTimeout(() => {
                winnerText.innerText = `Player ${currentPlayer} Wins!`;
                congratsPopup.classList.add("winner");
            }, 300);
        }

        player = player === "X" ? "O" : "X";
    }
});

function checkWinner(row, col, player) {
    return (
        board[row][0] === player && board[row][1] === player && board[row][2] === player ||
        board[0][col] === player && board[1][col] === player && board[2][col] === player ||
        board[0][0] === player && board[1][1] === player && board[2][2] === player ||
        board[0][2] === player && board[1][1] === player && board[2][0] === player
    );
}

function closeButton() {
    congratsPopup.classList.remove("winner");
    resetGame();
}

function resetGame() {
    board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    boxes.forEach(box => box.innerText = "");
    winnerText.innerText = "";
    player = "X";
}
