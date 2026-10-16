# Tic Tac Toe

A responsive two-player Tic Tac Toe game built with **HTML, CSS, and vanilla JavaScript**.

## Play online

### [🎮 Play Tic Tac Toe](https://tictac-game-nine.vercel.app/)

The game is hosted on Vercel and can be played in a browser without installing anything or running a local server.

## Features

- Classic 3 × 3 board for two players (X and O).
- Detects wins across all rows, columns, and diagonals.
- Detects a draw when all nine cells are occupied with no winner.
- Highlights the three cells in the winning line.
- Displays whose turn it is and announces the game result.
- Tracks wins for X, wins for O, and draws.
- Saves scores in browser local storage so they remain after a page refresh on the same browser.
- **New game** starts another round without clearing the scoreboard.
- **Reset scores** clears the stored scoreboard.
- Keyboard-friendly board navigation using arrow keys and visible focus styles.
- Responsive layout, accessible button labels, and a result dialog.

## Run locally on Windows

**Important:** localhost only points to your own computer. It will not work for other people, or if the server is not running.

1. Download this repository using **Code → Download ZIP** and extract it, or clone it:

       git clone https://github.com/Vikram2005-byte/tictac-game.git

2. Open the extracted/cloned folder in File Explorer.
3. Click the folder's address bar, type **cmd**, and press Enter.
4. Run:

       py -m http.server 8000

   If **py** is not recognized, try:

       python -m http.server 8000

5. Keep the terminal window open and visit **http://127.0.0.1:8000/** in the same computer's browser.
6. Stop the server with **Ctrl+C** when finished.

If port 8000 is busy, run **py -m http.server 8080** and visit **http://127.0.0.1:8080/**.

## Deployment on Vercel

The live version is hosted at [tictac-game-nine.vercel.app](https://tictac-game-nine.vercel.app/).

If this GitHub repository is connected to your Vercel project, new commits pushed to the production branch will normally trigger a deployment automatically. You can view deployment status in the [Vercel dashboard](https://vercel.com/vikram2005-bytes-projects). If the live website does not reflect the latest code, open the project and check the latest deployment's status and commit.

For a static HTML/CSS/JavaScript project, no build command is required and the project root should be the output directory.

## Controls

- Click or tap an empty square to place your mark.
- Use the **arrow keys** while a board square is focused to move focus around the board.
- Choose **New game** to clear the board and keep the scores.
- Choose **Reset scores** to clear the scoreboard.
- When a round ends, select **Play again** (or press Escape) to start another round.

## Score storage

The scoreboard is saved in your browser's local storage under the key tic-tac-toe-scores-v1. It is local to that browser profile and device; it is not synced to a server. Clearing site data or browser storage will remove the saved scores. If storage is unavailable, the game still works, but scores may not persist after the page is closed or refreshed.

## Project files

| File | Purpose |
|---|---|
| index.html | Game structure, board, scoreboard, status, and result dialog |
| style.css | Responsive layout, theme, focus styles, and winning-line highlight |
| script.js | Turn handling, win/draw logic, score tracking, and keyboard controls |

## Accessibility and privacy

The game uses native buttons, accessible names for board cells, a live status region, a native dialog for results, and reduced-motion support. No account or backend is used. Scores stay in the current browser's local storage.

## Future improvements

Ideas for further development include single-player mode against a computer, player name customization, selectable themes, and an optional best-of series.
