import { useEffect, useState } from 'react';
import { Circle } from './Circle';

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

  const handleClick = () => {
    const index = column.lastIndexOf(0);

    if (index < 0) {
      return;
    }

    const newColumn = [...column];

    newColumn[index] = activePlayer;

    const newBoard = [...board];

    newBoard[col] = newColumn;

    setActivePlayer(activePlayer === 1 ? 2 : 1);
    setColumn(newColumn);
    setBoard(newBoard);
  };

  return (
    <a onClick={handleClick} className={`flex flex-col justify-center gap-3 mr-3`}>
      {board[col].map((value, index) => (
        <Circle key={index} state={value} />
      ))}
    </a>
  );
};
