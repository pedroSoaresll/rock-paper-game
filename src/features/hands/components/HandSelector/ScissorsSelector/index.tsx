import ScissorsImg from "../../../../../assets/images/icon-scissors.svg";
import { HandSelectorBase } from "../_Base";
import { ScissorsSelectorProps } from "./types";

export const ScissorsSelector: React.FC<ScissorsSelectorProps> = ({
  onChoose,
}) => {
  return (
    <HandSelectorBase
      variant="scissors"
      onClick={() => onChoose && onChoose("scissors")}
    >
      <img src={ScissorsImg} alt="Icone mão de tesoura" />
    </HandSelectorBase>
  );
};
