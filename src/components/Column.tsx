import { Circle } from './Circle';

type Props = {
  cells: State[];
  col: number;
  setBoard: React.Dispatch<React.SetStateAction<State[][]>>;
};

export const Column: React.FC<Props> = ({ cells, setBoard }) => {
  const handleClick = () => {
    setBoard((prev) => {
      return prev;
    });
  };

  return (
    <a onClick={handleClick} className={`flex flex-col justify-center gap-3 mr-3`}>
      {cells.map((value, index) => (
        <Circle key={index} state={value} />
      ))}
    </a>
  );
};
