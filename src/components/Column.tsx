import { useEffect, useState } from 'react';
import { Circle } from './Circle';
import { useBoard } from '../hooks/useBoard';

type Props = {
  col: number;
  board: State[][];
  setBoard: React.Dispatch<React.SetStateAction<State[][]>>;
  activePlayer: State;
  setActivePlayer: (player: State) => void;
};

export const Column: React.FC<Props> = ({
  col,
  board,
  setBoard,
  activePlayer,
  setActivePlayer,
}) => {
  const [column, setColumn] = useState<State[]>(board[col]);
  const { checkWinner } = useBoard();

  const handleClick = () => {
    const index = column.lastIndexOf(0);

    if (index < 0) {
      return;
    }

    const newColumn = [...column];
    newColumn[index] = activePlayer;

    const newBoard = [...board];
    newBoard[col] = newColumn;

    const hasWon = checkWinner(newBoard, activePlayer, col, index);

    console.log({ hasWon });

    setActivePlayer(activePlayer === 1 ? 2 : 1);
    setColumn(newColumn);
    setBoard(newBoard);
  };

  return (
    <a onClick={handleClick} className={`flex flex-col justify-center gap-3 mr-3 `}>
      {board[col].map((value, index) => (
        <Circle key={index} state={value} />
      ))}
    </a>
  );
};
