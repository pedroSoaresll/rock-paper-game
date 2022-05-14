import { Scoreboard } from "../../features/Scoreboard";
import { ChooseHand } from "../../features/ChooseHand";
import styles from "./index.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.rootPage}>
      <div className={styles["area-scoreboard"]}>
        <Scoreboard />
      </div>

      <ChooseHand />
    </div>
  );
};

export default Home;
