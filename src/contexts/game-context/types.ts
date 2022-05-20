import { ReactNode } from "react";
import { Hands } from "../../features/hands/shared/types";

export interface GameProviderProps {
  children?: ReactNode;
}

export type GameStatus = "start" | "progress" | "finish";

export interface GameContextProps {
  status?: GameStatus;
  finishGame(): void;
  startGame(): void;
  resetGame(): void;
  P1Hand?: Hands;
  setP1Hand(value: Hands): void;
}
