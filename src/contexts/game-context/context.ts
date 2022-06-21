import { createContext } from "react";
import { GameContextProps } from "./types";

export const GameContext = createContext<GameContextProps>({
  finishGame: () => {},
  startGame: () => {},
  resetGame: () => {},
  status: undefined,
  P1Hand: undefined,
  P2Hand: undefined,
  setP1Hand: () => {},
  generateP2Hand: () => {},
});
