import styles from './index.module.css'

export const Score: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.subtitle}>Score</span>
      <span className={styles['text-point']}>13</span>
    </div>
  )
}
