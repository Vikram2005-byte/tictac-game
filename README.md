# Tic Tac Toe

A responsive two-player Tic Tac Toe game built with **HTML, CSS, and vanilla JavaScript**.

## Play online

Once GitHub Pages is enabled for this repository, the game will be available at:

**https://vikram2005-byte.github.io/tictac-game/**

If the link shows a 404, follow the one-time setup under [Enable the online demo](#enable-the-online-demo) below. GitHub Pages is separate from running the game on your own computer.

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

**Important:** localhost only points to the computer you're currently using. It will not work for other people, or if the server is not running.

1. Download the project using **Code → Download ZIP**, then extract the ZIP. Alternatively, clone it:

       git clone https://github.com/Vikram2005-byte/tictac-game.git

2. Open the extracted/cloned folder in File Explorer.
3. In that folder, click the address bar, type **cmd**, and press Enter. This opens Command Prompt in the correct folder.
4. Run:

       py -m http.server 8000

   If **py** is not recognized, try:

       python -m http.server 8000

5. Keep the terminal window open and visit **http://127.0.0.1:8000/** in the same computer's browser.
6. When you're finished, return to the terminal and press **Ctrl+C** to stop the server.

If the browser says it cannot connect, check that the server command is still running and that the terminal shows no error. If port 8000 is busy, use **py -m http.server 8080** and visit **http://127.0.0.1:8080/**.

## Enable the online demo

A GitHub Actions deployment workflow is included at **.github/workflows/deploy-pages.yml**.

1. Open this repository's [Settings → Pages](https://github.com/Vikram2005-byte/tictac-game/settings/pages).
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Open the [Actions tab](https://github.com/Vikram2005-byte/tictac-game/actions) and check the **Deploy Tic Tac Toe to GitHub Pages** workflow.
4. When the workflow finishes successfully, open **https://vikram2005-byte.github.io/tictac-game/**.

GitHub may take a short time to publish the first deployment. If it fails, open the workflow run to see the error.

## Controls

- Click or tap an empty square to place your mark.
- Use the **arrow keys** while a board square is focused to move focus around the board.
- Choose **New game** to clear the board and keep the scores.
- Choose **Reset scores** to clear the scoreboard.
- When a round ends, select **Play again** (or press Escape) to start another round.

## Score storage

The scoreboard is saved in your browser's local storage under the key tic-tac-toe-scores-v1. It is local to that browser profile and device; it is not synced to a server. Clearing site data or browser storage will remove the saved scores. If storage is unavailable, the game still works, but the scores will not persist after the page is closed or refreshed.

## Project files

| File | Purpose |
|---|---|
| index.html | Game structure, board, scoreboard, status, and result dialog |
| style.css | Responsive layout, themes, focus styles, and winning-line highlight |
| script.js | Turn handling, win/draw logic, score tracking, and keyboard controls |
| .github/workflows/deploy-pages.yml | Automated deployment to GitHub Pages |

## Accessibility and privacy

The game uses native buttons, accessible names for board cells, a live status region, a native dialog for results, and reduced-motion support. No account or backend is used. Scores stay in the current browser's local storage.

## Future improvements

Ideas for further development include single-player mode against a computer, player name customization, selectable themes, and an optional best-of series.
