import { useMemo, useState } from 'react'
import { HandId } from '../../features/hands/shared/types'
import { getRandomHand } from '../../features/match/utils'
import { GameContext } from './context'
import { GameContextProps, GameProviderProps, GameStatus } from './types'

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [P1Hand, setP1Hand] = useState<HandId>()
  const [P2Hand, setP2Hand] = useState<HandId>()
  const [status, setStatus] = useState<GameStatus>()

  const startGame = () => {
    setStatus('start')
  }

  const finishGame = () => {
    setStatus('finish')
  }

  const resetGame = () => {
    setStatus(undefined)
    setP1Hand(undefined)
    setP2Hand(undefined)
  }

  const generateP2Hand = () => {
    setP2Hand(getRandomHand())
  }

  const state: GameContextProps = useMemo(
    () => ({
      status,
      P1Hand,
      P2Hand,
      setP1Hand,
      startGame,
      finishGame,
      resetGame,
      generateP2Hand,
    }),
    [P1Hand, P2Hand, status]
  )

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>
}
