import ScissorsImg from "../../../assets/images/icon-scissors.svg";
import { HandSelectorBase } from "../_Base";

export const ScissorsSelector: React.FC = () => {
  return (
    <HandSelectorBase variant="scissors">
      <img src={ScissorsImg} alt="Icone mão de tesoura" />
    </HandSelectorBase>
  );
};
