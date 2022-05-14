import RockImg from "../../../assets/images/icon-rock.svg";
import { HandSelectorBase } from "../_Base";

interface RockSelectorProps {
  onChoose(handSelected: string): void;
}

export const RockSelector: React.FC<RockSelectorProps> = ({ onChoose }) => {
  return (
    <HandSelectorBase variant="rock" onClick={() => onChoose("rock")}>
      <img src={RockImg} alt="Icone mão de pedra" />
    </HandSelectorBase>
  );
};
