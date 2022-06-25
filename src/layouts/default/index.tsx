import { ReactNode } from 'react'
import styles from './index.module.css'

interface DefaultLayoutProps {
  children: ReactNode
  top: ReactNode
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  top,
}) => {
  return (
    <div className={styles.rootPage}>
      <div className={styles.topArea}>{top}</div>

      {children}
    </div>
  )
}
