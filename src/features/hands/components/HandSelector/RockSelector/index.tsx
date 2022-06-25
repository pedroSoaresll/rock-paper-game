import RockImg from '../../../../../assets/images/icon-rock.svg'
import { HandSelectorBase } from '../_Base'
import { RockSelectorProps } from './types'

export const RockSelector: React.FC<RockSelectorProps> = ({ onChoose }) => {
  return (
    <HandSelectorBase
      variant="rock"
      onClick={() => onChoose && onChoose('rock')}
    >
      <img src={RockImg} alt="Icone mão de pedra" />
    </HandSelectorBase>
  )
}
