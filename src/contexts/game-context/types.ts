import { ReactNode } from "react";
import { HandId } from "../../features/hands/shared/types";

export interface GameProviderProps {
  children?: ReactNode;
}

export type GameStatus = "start" | "progress" | "finish";

export interface GameContextProps {
  status?: GameStatus;
  finishGame(): void;
  startGame(): void;
  resetGame(): void;
  P1Hand?: HandId;
  setP1Hand(value: HandId): void;
}
