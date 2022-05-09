import RockImg from "../../../assets/images/icon-rock.svg";
import { HandSelectorBase } from "../_Base";

export const RockSelector: React.FC = () => {
  return (
    <HandSelectorBase variant="rock">
      <img src={RockImg} alt="Icone mão de pedra" />
    </HandSelectorBase>
  );
};
