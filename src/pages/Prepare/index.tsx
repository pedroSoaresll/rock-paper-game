import { Link } from "react-router-dom";
import { Button } from "../../components";
import { Scoreboard } from "../../features/score-board";
import { DefaultLayout } from "../../layouts";

const Prepare: React.FC = () => {
  return (
    <DefaultLayout top={<Scoreboard />}>
      <Link to="/start">
        <Button>Começar</Button>
      </Link>
    </DefaultLayout>
  );
};

export default Prepare;
