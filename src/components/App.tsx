import { Column } from './Column';
import { Chip } from './Chip';
import { Dialog } from './Dialog';
import { useGameStore } from '../store/useGameStore';

const App = () => {
  const { board, currentPlayer, hasEnded } = useGameStore((state) => ({
    board: state.board,
    currentPlayer: state.currentPlayer,
    hasEnded: state.hasEnded,
  }));

  return (
    <main className="bg-black w-full h-screen flex flex-col justify-center items-center">
      <section className="bg-blue p-6 rounded-lg shadow-md flex">
        {board.map((_, index) => (
          <Column key={index} col={index} />
        ))}
      </section>

      <section>
        <h2 className="text-3xl text-stone-200 my-3 text-center">Player</h2>

        <div className="flex justify-center items-center gap-3">
          <Chip
            chipState={1}
            classnames={`transition-all duration-300 transform ${
              currentPlayer === 1 ? 'scale-110' : 'scale-90'
            }`}
          />
          <Chip
            chipState={2}
            classnames={`transition-all duration-300 transform ${
              currentPlayer === 2 ? 'scale-110' : 'scale-90'
            }`}
          />
        </div>
      </section>

      {hasEnded ? <Dialog /> : null}
    </main>
  );
};

export default App;
