import { Link } from "react-router-dom";
import { Scoreboard } from "../../features/Scoreboard";
import { DefaultLayout } from "../../layouts/default";

const Prepare: React.FC = () => {
  return (
    <DefaultLayout top={<Scoreboard />}>
      <Link to="/start">clica ai pra iniciar</Link>
    </DefaultLayout>
  );
};

export default Prepare;
