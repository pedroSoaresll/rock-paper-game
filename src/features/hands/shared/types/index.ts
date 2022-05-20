export type Hands = "paper" | "rock" | "scissors";

export interface HandSelectorProps {
  onChoose?(handSelected: Hands): void;
}

export interface ChooseHandProps extends HandSelectorProps {}
