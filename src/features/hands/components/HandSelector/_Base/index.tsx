import { HandId } from '../../../shared/types'
import styles from './index.module.css'
import { HandSelectorBaseProps } from './type'

const variants: Record<HandId, string> = {
  paper: styles['outBox--paper'],
  scissors: styles['outBox--scissors'],
  rock: styles['outBox--rock'],
}

export const HandSelectorBase: React.FC<HandSelectorBaseProps> = ({
  children,
  variant,
  ...props
}) => {
  return (
    <div className={`${styles.outBox} ${variants[variant]}`} {...props}>
      <div className={styles.circle}>{children}</div>
    </div>
  )
}
