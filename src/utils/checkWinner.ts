export const checkWinner = (board: State[][], activePlayer: State, col: number, row: number) => {
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

  let count = 0;

  // check horizontal
  for (let tempCol = 0; tempCol < board.length; tempCol++) {
    if (board[tempCol][row] === activePlayer) {
      count++;

      if (count === 4) {
        return true;
      }
    } else {
      count = 0;
    }
  }

  count = 0;

  // check vertical
  for (let tempRow = board[col].length - 1; tempRow >= 0; tempRow--) {
    if (board[col][tempRow] === 0) {
      break;
    }

    if (board[col][tempRow] === activePlayer) {
      count++;

      if (count === 4) {
        return true;
      }
    } else {
      count = 0;
    }
  }

  // 0,5 - 1,4 - 2,3 - 3,2
  // 1,5 - 2,4 - 3,3 - 4,2
  // 2,5 - 3,4 - 4,3 - 5,2
  // 3,5 - 4,4 - 5,3 - 6,2

  // diagonal => bottom-left -> top-right
  for (let tempCol = 0; tempCol < 4; tempCol++) {
    for (let tempRow = 5; tempRow > 2; tempRow--) {
      if (
        board[tempCol][tempRow] === activePlayer &&
        board[tempCol + 1][tempRow - 1] === activePlayer &&
        board[tempCol + 2][tempRow - 2] === activePlayer &&
        board[tempCol + 3][tempRow - 3] === activePlayer
      ) {
        return true;
      }
    }
  }

  // diagonal => bottom-right -> top-left

  // 6,5 - 5,4 - 4,3 - 3,2
  // 5,5 - 4,4 - 3,3 - 2,2
  // 4,5 - 3,4 - 2,3 - 1,2
  // 3,5 - 2,4 - 1,3 - 0,2

  for (let tempCol = 6; tempCol > 2; tempCol--) {
    for (let tempRow = 5; tempRow > 2; tempRow--) {
      if (
        board[tempCol][tempRow] === activePlayer &&
        board[tempCol - 1][tempRow - 1] === activePlayer &&
        board[tempCol - 2][tempRow - 2] === activePlayer &&
        board[tempCol - 3][tempRow - 3] === activePlayer
      ) {
        return true;
      }
    }
  }

  return false;
};
