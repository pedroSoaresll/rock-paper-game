import { useContext } from 'react'
import { GameContext } from '../contexts/game-context/context'

export const useGame = () => useContext(GameContext)
