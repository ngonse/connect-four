import { Circle } from './Circle';

type Props = {
  cells: State[];
  col: number;
  board: State[][];
  setBoard: React.Dispatch<React.SetStateAction<State[][]>>;
};

export const Column: React.FC<Props> = ({ cells, col, board, setBoard }) => {
  const handleClick = () => {
    const canAdd = cells.some((cell) => cell === 0);

    if (!canAdd) {
      return;
    }

    const index = [...cells].reverse().findIndex((cell) => cell < 1);

    const newCol = [...cells];

    newCol[index] = 2;

    const newBoard = [...board];

    newBoard[col] = newCol;

    setBoard(newBoard);
  };

  return (
    <a onClick={handleClick} className={`flex flex-col justify-center gap-3 mr-3`}>
      {cells.map((value, index) => (
        <Circle key={index} state={value} />
      ))}
    </a>
  );
};
