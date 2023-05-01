import { useMemo } from 'react';
import { clsx } from 'clsx';
import { useGameStore } from '../store/useGameStore';

type Props = {
  chipState: State;
  classnames?: string;
};

export const Chip: React.FC<Props> = ({ chipState, classnames }) => {
  const currentPlayer = useGameStore((state) => state.currentPlayer);

  const CHIP_STATES: Record<State, string> = useMemo(
    () => ({
      0: 'bg-neutral-300 border-neutral-300',
      1: 'bg-yellow border-yellow',
      2: 'bg-red border-red',
      3: `border-4 border-green-600 ${currentPlayer === 1 ? 'bg-yellow' : 'bg-red'}`,
    }),
    [currentPlayer],
  );

  const classes = clsx(
    'w-20 h-20 rounded-full flex justify-center items-center border-8',
    CHIP_STATES[chipState],
    classnames,
  );

  return <span className={classes} />;
};
