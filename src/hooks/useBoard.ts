export const useBoard = () => {
  const checkWinner = (board: State[][], activePlayer: State, col: number, row: number) => {
    let count = 0;

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
    */

    // check horizontal
    // for (let tempCol = 0; tempCol < board.length; tempCol++) {
    //   if (board[tempCol][row] === activePlayer) {
    //     count++;

    //     if (count === 4) {
    //       return true;
    //     }
    //   } else {
    //     count = 0;
    //   }
    // }

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

    return false;
  };

  return { checkWinner };
};
