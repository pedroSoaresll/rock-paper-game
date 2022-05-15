import { Hands } from "../../../types";

export interface HandSelectorBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: Hands;
  children?: React.ReactNode;
}
