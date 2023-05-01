export const checkTie = (board: State[][]) => board.every((col) => col.every((row) => row !== 0));
