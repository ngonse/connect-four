import { useGameStore } from '../store/useGameStore';

type Props = {
  state: State;
  classnames?: string;
};

export const Circle: React.FC<Props> = ({ state, classnames }) => {
  const activePlayer = useGameStore((state) => state.activePlayer);

  let bg = 'bg-neutral-300';
  let border = 'border-neutral-300';

  if (state === 1) {
    bg = 'bg-yellow';
    border = 'border-yellow';
  } else if (state === 2) {
    bg = 'bg-red';
    border = 'border-red';
  } else if (state === 3) {
    bg = activePlayer === 1 ? 'bg-yellow' : 'bg-red';
    border = 'border-4 border-green-600';
  }

  return (
    <span
      className={`w-20 h-20 rounded-full flex justify-center items-center border-8
        ${bg}
        ${border}
        ${classnames && classnames}
      `}
    />
  );
};
