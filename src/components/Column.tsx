import { Circle } from './Circle';
import { checkWinner } from '../utils/checkWinner';
import { useGameStore } from '../store/useGameStore';
import { checkTie } from '../utils/checkTie';

type Props = {
  col: number;
};

export const Column: React.FC<Props> = ({ col }) => {
  const { board, activePlayer, hasEnded, setActivePlayer, setBoard, setEnded, setTie } =
    useGameStore((state) => ({
      board: state.board,
      setBoard: state.setBoard,
      activePlayer: state.activePlayer,
      setActivePlayer: state.setActivePlayer,
      hasEnded: state.hasEnded,
      setEnded: state.setEnd,
      setTie: state.setTie,
    }));

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

    console.log({ hasWon });

    if (hasWon) {
      setEnded();
      return;
    }

    const tie = checkTie(newBoard);

    if (tie) {
      setTie();
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
