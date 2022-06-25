import { PaperSelector, RockSelector, ScissorsSelector } from '../../components'
import { HandId } from '..'

export const renderHandBySelection = (hand: HandId) => {
  const structure: Record<HandId, JSX.Element> = {
    paper: <PaperSelector />,
    rock: <RockSelector />,
    scissors: <ScissorsSelector />,
  }

  return structure[hand]
}

export const getHandByNumber = (index: number): HandId => {
  const hands: HandId[] = ['paper', 'rock', 'scissors']
  return hands[index]
}
