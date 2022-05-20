import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { GameContext } from "../../contexts/game-context/context";
import { ChooseHand } from "../../features/hands/shared";
import { Scoreboard } from "../../features/Scoreboard";
import { DefaultLayout } from "../../layouts/default";
import { Hands } from "../../features/hands/shared/types";

const Start: React.FC = () => {
  const navigate = useNavigate()
  const { setP1Hand } = useContext(GameContext)

  function handleHandSelected(value: Hands) {
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
