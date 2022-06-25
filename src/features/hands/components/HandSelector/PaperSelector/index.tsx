import { HandSelectorBase } from '../_Base'
import PaperImg from '../../../../../assets/images/icon-paper.svg'
import { PaperSelectorProps } from './types'

export const PaperSelector: React.FC<PaperSelectorProps> = ({ onChoose }) => {
  return (
    <HandSelectorBase
      variant="paper"
      onClick={() => onChoose && onChoose('paper')}
    >
      <img src={PaperImg} alt="Icone mão de papel" />
    </HandSelectorBase>
  )
}
