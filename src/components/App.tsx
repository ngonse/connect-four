import { Column } from './Column';
import { Circle } from './Circle';
import { Dialog } from './Dialog';
import { useGameStore } from '../store/useGameStore';

const App = () => {
  const { board, activePlayer, hasEnded } = useGameStore((state) => ({
    board: state.board,
    activePlayer: state.activePlayer,
    hasEnded: state.hasEnded,
  }));

  return (
    <main className="bg-black w-full h-screen flex flex-col justify-center items-center">
      <section className="bg-blue p-6 rounded-lg shadow-md flex ">
        {board.map((_, index) => (
          <Column key={index} col={index} />
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

      {hasEnded ? <Dialog /> : null}
    </main>
  );
};

export default App;
