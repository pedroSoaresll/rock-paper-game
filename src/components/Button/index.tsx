import styles from './index.module.css'

export const Button: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <button className={styles.button}>{children}</button>
}
