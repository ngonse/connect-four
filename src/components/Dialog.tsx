import { useGameStore } from '../store/useGameStore';

export const Dialog = () => {
  const { currentPlayer, clearState } = useGameStore((state) => ({
    currentPlayer: state.currentPlayer,
    clearState: state.clearState,
  }));

  let textColor = 'text-gray-200';

  if (currentPlayer === 1) {
    textColor = 'text-yellow';
  } else if (currentPlayer === 2) {
    textColor = 'text-red';
  }

  return (
    <div className="dialog fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-70 flex justify-center items-center transition-all duration-1000">
      <div className="w-[500px] h-80 bg-slate-100 rounded-2xl shadow-md flex flex-col justify-center items-center">
        {currentPlayer === 0 ? (
          <p className="text-3xl mb-6">It's a tie!</p>
        ) : (
          <p className="text-3xl mb-6">Player {currentPlayer} wins!</p>
        )}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`icon icon-tabler icon-tabler-award-filled w-[80px] h-[80px] ${textColor}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M19.496 13.983l1.966 3.406a1.001 1.001 0 0 1 -.705 1.488l-.113 .011l-.112 -.001l-2.933 -.19l-1.303 2.636a1.001 1.001 0 0 1 -1.608 .26l-.082 -.094l-.072 -.11l-1.968 -3.407a8.994 8.994 0 0 0 6.93 -3.999z"
            strokeWidth="0"
            fill="currentColor"
          ></path>
          <path
            d="M11.43 17.982l-1.966 3.408a1.001 1.001 0 0 1 -1.622 .157l-.076 -.1l-.064 -.114l-1.304 -2.635l-2.931 .19a1.001 1.001 0 0 1 -1.022 -1.29l.04 -.107l.05 -.1l1.968 -3.409a8.994 8.994 0 0 0 6.927 4.001z"
            strokeWidth="0"
            fill="currentColor"
          ></path>
          <path
            d="M12 2l.24 .004a7 7 0 0 1 6.76 6.996l-.003 .193l-.007 .192l-.018 .245l-.026 .242l-.024 .178a6.985 6.985 0 0 1 -.317 1.268l-.116 .308l-.153 .348a7.001 7.001 0 0 1 -12.688 -.028l-.13 -.297l-.052 -.133l-.08 -.217l-.095 -.294a6.96 6.96 0 0 1 -.093 -.344l-.06 -.271l-.049 -.271l-.02 -.139l-.039 -.323l-.024 -.365l-.006 -.292a7 7 0 0 1 6.76 -6.996l.24 -.004z"
            strokeWidth="0"
            fill="currentColor"
          ></path>
        </svg>

        <button
          onClick={clearState}
          className="mt-6 bg-indigo-500 hover:bg-indigo-700 text-white uppercase py-3 px-6 rounded-md shadow-lg"
        >
          New Game
        </button>
      </div>
    </div>
  );
};
