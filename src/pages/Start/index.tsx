import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { GameContext } from "../../contexts/game-context/context";
import { ChooseHand } from "../../features/hands/shared";
import { Scoreboard } from "../../features/score-board";
import { DefaultLayout } from "../../layouts";
import { HandId } from "../../features/hands/shared/types";

const Start: React.FC = () => {
  const navigate = useNavigate()
  const { setP1Hand } = useContext(GameContext)

  function handleHandSelected(value: HandId) {
    setP1Hand(value)
    navigate('/match')
  }

  return (
    <DefaultLayout top={<Scoreboard />}>
      <ChooseHand onChoose={handleHandSelected} />
    </DefaultLayout>
  );
};

export default Start;
