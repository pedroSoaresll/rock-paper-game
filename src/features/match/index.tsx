import { useGame } from '../../hooks'
import { renderHandBySelection } from '../hands'
import styles from './index.module.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Match = () => {
  const { P1Hand, P2Hand, generateP2Hand } = useGame()
  const navigate = useNavigate()

  const PickPlayer1 = P1Hand && renderHandBySelection(P1Hand)
  const PickPlayer2 = P2Hand && renderHandBySelection(P2Hand)

  useEffect(() => {
    if (!P1Hand) {
      navigate('/')
    }
  }, [navigate, P1Hand])

  useEffect(() => {
    generateP2Hand()
  }, [generateP2Hand])

  useEffect(() => {
    if (!P1Hand && !P2Hand) return
  }, [P1Hand, P2Hand])

  if (!P1Hand && !P2Hand) return null

  return (
    <div className={styles.wrapper}>
      <span className={styles.pickedText}>You picked</span>
      <span className={styles.pickedText}>The house picked</span>

      {PickPlayer1}
      {PickPlayer2}
    </div>
  )
}
