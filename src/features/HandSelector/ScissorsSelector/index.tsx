import ScissorsImg from "../../../assets/images/icon-scissors.svg";
import { HandSelectorBase } from "../_Base";

interface ScissorsSelectorProps {
  onChoose(handSelected: string): void;
}

export const ScissorsSelector: React.FC<ScissorsSelectorProps> = ({
  onChoose,
}) => {
  return (
    <HandSelectorBase variant="scissors" onClick={() => onChoose("scissors")}>
      <img src={ScissorsImg} alt="Icone mão de tesoura" />
    </HandSelectorBase>
  );
};
