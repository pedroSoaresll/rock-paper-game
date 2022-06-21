import { Match } from "../../features/match";
import { Scoreboard } from "../../features/score-board";
import { DefaultLayout } from "../../layouts";

const MatchPage: React.FC = () => {
  return (
    <DefaultLayout top={<Scoreboard />}>
      <Match />
    </DefaultLayout>
  );
};

export default MatchPage;
