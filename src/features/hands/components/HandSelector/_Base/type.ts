import { HandId } from "../../../shared";

export interface HandSelectorBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: HandId;
  children?: React.ReactNode;
}
