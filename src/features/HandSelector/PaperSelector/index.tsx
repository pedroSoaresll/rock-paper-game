import { HandSelectorBase } from "../_Base";
import PaperImg from "../../../assets/images/icon-paper.svg";

interface PaperSelectorProps {
  onChoose(handSelected: string): void;
}

export const PaperSelector: React.FC<PaperSelectorProps> = ({ onChoose }) => {
  return (
    <HandSelectorBase variant="paper" onClick={() => onChoose("paper")}>
      <img src={PaperImg} alt="Icone mão de papel" />
    </HandSelectorBase>
  );
};
