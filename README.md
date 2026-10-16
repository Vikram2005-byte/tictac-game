# Tic Tac Toe

A responsive two-player Tic Tac Toe game built with **HTML, CSS, and vanilla JavaScript**. Play locally in your browser—no installation, build step, account, or server required.

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
- Keyboard-friendly board navigation using the arrow keys and visible focus styles.
- Responsive layout, accessible button labels, and a result dialog.

## Play the game

**Option 1: Open locally**

1. Clone this repository:

   ```bash
   git clone https://github.com/Vikram2005-byte/tictac-game.git
   ```

2. Open the downloaded folder.
3. Open `index.html` in a modern browser.

**Option 2: Run a local web server**

From the repository folder, run:

```bash
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Controls

- Click or tap an empty square to place your mark.
- Use the **arrow keys** while a board square is focused to move focus around the board.
- Choose **New game** to clear the board and keep the scores.
- Choose **Reset scores** to clear the scoreboard.
- When a round ends, select **Play again** (or press Escape) to start another round.

## Score storage

The scoreboard is saved in your browser's local storage under the key `tic-tac-toe-scores-v1`. It is local to that browser profile and device; it is not synced to a server. Clearing site data or browser storage will remove the saved scores. If storage is unavailable, the game still works, but the scores will not persist after the page is closed or refreshed.

## Project files

| File | Purpose |
|---|---|
| `index.html` | Game structure, board, scoreboard, status, and result dialog |
| `style.css` | Responsive layout, themes, focus styles, and winning-line highlight |
| `script.js` | Turn handling, win/draw logic, score tracking, and keyboard controls |

## Accessibility and privacy

The game uses native buttons, accessible names for board cells, a live status region, a native dialog for results, and reduced-motion support. No account or backend is used. Scores stay in the current browser's local storage.

## Future improvements

Ideas for further development include single-player mode against a computer, player name customization, selectable themes, and an optional best-of series.
