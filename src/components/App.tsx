import { useState } from 'react';
import { Column } from './Column';

const App = () => {
  const [board, setBoard] = useState<State[][]>(() => {
    return Array.from({ length: 7 }, () => Array(6).fill(0));
  });

  return (
    <main className="bg-black w-full h-screen flex justify-center items-center">
      <div className="bg-blue p-6 rounded-lg shadow-md flex flex-row">
        {board.map((cells, index) => (
          <Column key={index} cells={cells} col={index} board={board} setBoard={setBoard} />
        ))}
      </div>
    </main>
  );
};

export default App;
