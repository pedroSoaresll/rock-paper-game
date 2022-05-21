import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Match } from "../../features/match";
import { Scoreboard } from "../../features/score-board";
import { useGame } from "../../hooks";
import { DefaultLayout } from "../../layouts";

const MatchPage: React.FC = () => {
  const navigate = useNavigate();
  const { P1Hand } = useGame();

  useEffect(() => {
    if (!P1Hand) navigate("/");
  }, [P1Hand, navigate]);

  return (
    <DefaultLayout top={<Scoreboard />}>
      <Match />
    </DefaultLayout>
  );
};

export default MatchPage;
