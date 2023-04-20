type Props = {
  state: State;
  classnames?: string;
};

export const Circle: React.FC<Props> = ({ state, classnames }) => {
  let bg = state === 0 ? 'bg-neutral-300' : '';

  if (state === 1) {
    bg = 'bg-yellow';
  } else if (state === 2) {
    bg = 'bg-red';
  }

  return (
    <span
      className={`w-20 h-20 rounded-full flex justify-center items-center ${bg} ${
        classnames && classnames
      }`}
    />
  );
};