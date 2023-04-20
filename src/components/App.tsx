import { useEffect, useState } from 'react';
import { Column } from './Column';
import { Circle } from './Circle';
import { useGameStore } from '../store/useGameStore';

const App = () => {
  const [board, setBoard] = useState<State[][]>(() => {
    return Array.from({ length: 7 }, () => Array(6).fill(0));
  });
  const [activePlayer, setActivePlayer] = useState<State>(1);
  const [hasEnded, setEnded] = useState(false);

  const reset = () => {
    setBoard(Array.from({ length: 7 }, () => Array(6).fill(0)));
    setActivePlayer(1);
    setEnded(false);
  };

  return (
    <main className="bg-black w-full h-screen flex flex-col justify-center items-center">
      <section className="bg-blue p-6 rounded-lg shadow-md flex ">
        {board.map((_, index) => (
          <Column
            key={index}
            col={index}
            board={board}
            setBoard={setBoard}
            activePlayer={activePlayer}
            setActivePlayer={setActivePlayer}
            hasEnded={hasEnded}
            setEnded={setEnded}
          />
        ))}
      </section>

      <section>
        <h2 className="text-3xl text-stone-200 my-3 text-center">Player</h2>

        <div className="flex justify-center items-center gap-3">
          <Circle
            state={1}
            classnames={`transition-all duration-300 transform ${
              activePlayer === 1 ? 'scale-110' : 'scale-90'
            }`}
          />
          <Circle
            state={2}
            classnames={`transition-all duration-300 transform ${
              activePlayer === 2 ? 'scale-110' : 'scale-90'
            }`}
          />
        </div>
      </section>

      {hasEnded ? (
        <div className="dialog fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-70 flex justify-center items-center transition-all duration-1000">
          <div className="w-[500px] h-80 bg-slate-100 rounded-2xl shadow-md flex flex-col justify-center items-center">
            <p className="text-3xl mb-6">Player {activePlayer} has won!</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`icon icon-tabler icon-tabler-award-filled w-[80px] h-[80px] ${
                activePlayer === 1 ? 'text-yellow' : 'text-red'
              }`}
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
              onClick={reset}
              className="mt-6 bg-indigo-500 hover:bg-indigo-700 text-white uppercase py-3 px-6 rounded-md shadow-lg"
            >
              New Game
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
};

export default App;
