import { Scoreboard } from "../../components/Scoreboard";
import { Win } from "../../scenes/Win";
import styles from "./index.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.rootPage}>
      <div className={styles["area-scoreboard"]}>
        <Scoreboard />
      </div>

      <Win />
    </div>
  );
};

export default Home;
