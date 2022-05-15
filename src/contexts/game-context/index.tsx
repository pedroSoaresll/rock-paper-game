import { useState } from "react";
import { Hands } from "../../features/hands/types";
import { GameContext } from "./context";
import { GameContextProps, GameProviderProps, GameStatus } from "./types";

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [P1Hand, setP1Hand] = useState<Hands>();
  const [status, setStatus] = useState<GameStatus>();

  const startGame = () => {
    setStatus("start");
  };

  const finishGame = () => {
    setStatus("finish");
  };

  const resetGame = () => {
    setStatus(undefined);
    setP1Hand(undefined)
  };

  const state: GameContextProps = {
    status,
    P1Hand,
    setP1Hand,
    startGame,
    finishGame,
    resetGame,
  };

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
};
