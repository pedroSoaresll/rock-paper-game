import {
  PaperSelector,
  RockSelector,
  ScissorsSelector,
} from '../../../components'
import styles from './index.module.css'
import { ChooseHandProps } from '../../types'

export const ChooseHand: React.FC<ChooseHandProps> = ({ onChoose }) => {
  return (
    <div>
      <div className={styles.areaChooses}>
        <PaperSelector onChoose={onChoose} />

        <div className={styles.horizontalBar}></div>

        <ScissorsSelector onChoose={onChoose} />

        <div className={styles.bottomCircleWrapper}>
          <RockSelector onChoose={onChoose} />

          <div className={styles.diagonalBars}></div>
        </div>
      </div>
    </div>
  )
}
