import { YourPicked } from "../../features/hands/shared";
import { Scoreboard } from "../../features/score-board";
import { DefaultLayout } from "../../layouts";

const Match: React.FC = () => {
  return (
    <DefaultLayout top={<Scoreboard />}>
      <YourPicked />
    </DefaultLayout>
  );
};

export default Match;
