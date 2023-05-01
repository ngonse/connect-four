import { Chip } from './Chip';
import { checkWinner } from '../utils/checkWinner';
import { useGameStore } from '../store/useGameStore';

type Props = {
  col: number;
};

export const Column: React.FC<Props> = ({ col }) => {
  const { board, currentPlayer, hasEnded, setCurrentPlayer, setBoard, setEnded, setTie } =
    useGameStore((state) => ({
      board: state.board,
      setBoard: state.setBoard,
      currentPlayer: state.currentPlayer,
      setCurrentPlayer: state.setCurrentPlayer,
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
    newColumn[index] = currentPlayer;

    const newBoard = [...board];
    newBoard[col] = newColumn;

    setBoard(newBoard);

    const hasWon = checkWinner(newBoard, currentPlayer, col, index);

    if (hasWon) {
      hasWon.forEach((chip) => {
        newBoard[chip[0]][chip[1]] = 3;
      });

      setBoard(newBoard);
      setEnded();
      return;
    }

    const tie = board.every((col) => col.every((row) => row !== 0));

    if (tie) {
      setTie();
      return;
    }

    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  return (
    <a onClick={handleClick} className="flex flex-col justify-center gap-3 mr-3">
      {board[col].map((chipState, index) => (
        <Chip key={index} chipState={chipState} />
      ))}
    </a>
  );
};
