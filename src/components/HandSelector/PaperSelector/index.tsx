import { HandSelectorBase } from "../_Base";
import PaperImg from "../../../assets/images/icon-paper.svg";


export const PaperSelector: React.FC = () => {

  return (
    <HandSelectorBase variant="paper">
      <img src={PaperImg} alt="Icone mão de papel" />
    </HandSelectorBase>
  )
};
