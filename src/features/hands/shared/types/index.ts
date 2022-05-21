export type HandId = "paper" | "rock" | "scissors";

export interface HandSelectorProps {
  onChoose?(handSelected: HandId): void;
}

export interface ChooseHandProps extends HandSelectorProps {}
