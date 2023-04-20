import { Circle } from './Circle';
import { checkWinner } from '../utils/checkWinner';

type Props = {
  col: number;
  board: State[][];
  setBoard: React.Dispatch<React.SetStateAction<State[][]>>;
  activePlayer: State;
  setActivePlayer: (player: State) => void;
  hasEnded: boolean;
  setEnded: (hasWon: boolean) => void;
};

export const Column: React.FC<Props> = ({
  col,
  board,
  setBoard,
  activePlayer,
  setActivePlayer,
  hasEnded,
  setEnded,
}) => {
  const handleClick = () => {
    if (hasEnded) {
      return;
    }

    const column = [...board[col]];

    const index = column.lastIndexOf(0);

    if (index < 0) {
      return;
    }

    const newColumn = [...column];
    newColumn[index] = activePlayer;

    const newBoard = [...board];
    newBoard[col] = newColumn;

    setBoard(newBoard);

    const hasWon = checkWinner(newBoard, activePlayer, col, index);
    if (hasWon) {
      console.log(`ganó el compa del color ${activePlayer === 1 ? 'yellow' : 'red'}`);
      setEnded(true);
      return;
    }

    setActivePlayer(activePlayer === 1 ? 2 : 1);
  };

  return (
    <a onClick={handleClick} className={`flex flex-col justify-center gap-3 mr-3 `}>
      {board[col].map((value, index) => (
        <Circle key={index} state={value} />
      ))}
    </a>
  );
};
