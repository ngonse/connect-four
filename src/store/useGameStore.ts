import { create } from 'zustand';

type GameStore = {
  board: State[][];
  activePlayer: State;
  hasEnded: boolean;
  tie: boolean;
  setBoard: (board: State[][]) => void;
  setActivePlayer: (player: State) => void;
  setEnd: () => void;
  setTie: () => void;
  clearState: () => void;
};

const EMPTY_BOARD: State[][] = Array.from({ length: 7 }, () => Array(6).fill(0));
const FIRTS_PLAYER = 1;

export const useGameStore = create<GameStore>((set) => ({
  board: EMPTY_BOARD,
  activePlayer: FIRTS_PLAYER,
  hasEnded: false,
  tie: false,
  setBoard: (board) => set(() => ({ board })),
  setActivePlayer: (activePlayer) => set(() => ({ activePlayer })),
  setEnd: () => set(() => ({ hasEnded: true })),
  setTie: () => set(() => ({ tie: true, hasEnded: true, activePlayer: 0 })),
  clearState: () =>
    set(() => ({ board: EMPTY_BOARD, activePlayer: FIRTS_PLAYER, hasEnded: false })),
}));
