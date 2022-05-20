import { Hands } from "../../../shared";

export interface HandSelectorBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: Hands;
  children?: React.ReactNode;
}
