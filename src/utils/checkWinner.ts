const CHIPS_TO_WIN = 4;

export const checkWinner = (board: State[][], currentPlayer: State, col: number, row: number) => {
  let count = 0;

  let winnerChips: [number, number][] = [];

  // check horizontal
  for (let tempCol = 0; tempCol < board.length; tempCol++) {
    if (board[tempCol][row] === currentPlayer) {
      count++;
      winnerChips.push([tempCol, row]);

      if (count === CHIPS_TO_WIN) {
        return winnerChips;
      }
    } else {
      winnerChips = [];
      count = 0;
    }
  }

  winnerChips = [];
  count = 0;

  // check vertical
  for (let tempRow = board[col].length - 1; tempRow >= 0; tempRow--) {
    if (board[col][tempRow] === 0) {
      break;
    }

    if (board[col][tempRow] === currentPlayer) {
      count++;
      winnerChips.push([col, tempRow]);

      if (count === CHIPS_TO_WIN) {
        return winnerChips;
      }
    } else {
      count = 0;
      winnerChips = [];
    }
  }

  // diagonal => bottom-left -> top-right
  for (let tempCol = 0; tempCol < 4; tempCol++) {
    for (let tempRow = 5; tempRow > 2; tempRow--) {
      if (
        board[tempCol][tempRow] === currentPlayer &&
        board[tempCol + 1][tempRow - 1] === currentPlayer &&
        board[tempCol + 2][tempRow - 2] === currentPlayer &&
        board[tempCol + 3][tempRow - 3] === currentPlayer
      ) {
        winnerChips.push(
          [tempCol, tempRow],
          [tempCol + 1, tempRow - 1],
          [tempCol + 2, tempRow - 2],
          [tempCol + 3, tempRow - 3],
        );

        return winnerChips;
      }
    }
  }

  // diagonal => bottom-right -> top-left
  for (let tempCol = 6; tempCol > 2; tempCol--) {
    for (let tempRow = 5; tempRow > 2; tempRow--) {
      if (
        board[tempCol][tempRow] === currentPlayer &&
        board[tempCol - 1][tempRow - 1] === currentPlayer &&
        board[tempCol - 2][tempRow - 2] === currentPlayer &&
        board[tempCol - 3][tempRow - 3] === currentPlayer
      ) {
        winnerChips.push(
          [tempCol, tempRow],
          [tempCol - 1, tempRow - 1],
          [tempCol - 2, tempRow - 2],
          [tempCol - 3, tempRow - 3],
        );

        return winnerChips;
      }
    }
  }

  return null;
};

/*
  board

  first array  = 7 -> columns
  second array = 6 -> rows

  * * * * * * *
  * * * * * * *
  * * * * * * *
  * * * * * * *
  * * * * * * *
  * * * * * * *

        * * * *
      * * * * *
    * * * * * *
  * * * * * *
  * * * * *
  * * * *

  * * * *
  * * * * *
  * * * * * *
    * * * * * *
      * * * * *
        * * * *
*/
