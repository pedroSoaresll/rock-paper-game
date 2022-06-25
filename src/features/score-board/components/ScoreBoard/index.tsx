import LogoImg from '../../../../assets/images/logo.svg'
import styles from './index.module.css'
import { Score } from '../Score'

export const Scoreboard: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={LogoImg} alt="Logo da aplicação" />
      </div>

      <Score />
    </div>
  )
}
