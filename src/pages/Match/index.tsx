import { useContext } from "react";
import { GameContext } from "../../contexts/game-context/context";
import { Scoreboard } from "../../features/Scoreboard";
import { DefaultLayout } from "../../layouts/default";

const Match: React.FC = () => {
  const { P1Hand } = useContext(GameContext);

  return (
    <DefaultLayout top={<Scoreboard />}>
      <p>The player 1 is: {P1Hand}</p>
    </DefaultLayout>
  );
};

export default Match;
