import { useState } from "react";
import { HandId } from "../../features/hands/shared/types";
import { GameContext } from "./context";
import { GameContextProps, GameProviderProps, GameStatus } from "./types";

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [P1Hand, setP1Hand] = useState<HandId>();
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
