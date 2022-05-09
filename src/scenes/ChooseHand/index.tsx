import {
  PaperSelector,
  RockSelector,
  ScissorsSelector,
} from "../../components/HandSelector";
import styles from "./index.module.css";

export const ChooseHand: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.areaChooses}>
        <PaperSelector />

        <div className={styles.horizontalBar}></div>

        <ScissorsSelector />

        <div className={styles.bottomCircleWrapper}>
          <RockSelector />

          <div className={styles.diagonalBars}></div>
        </div>
      </div>
    </div>
  );
};
