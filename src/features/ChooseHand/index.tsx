import {
  PaperSelector,
  RockSelector,
  ScissorsSelector,
} from "../HandSelector";
import styles from "./index.module.css";

export const ChooseHand: React.FC = () => {
  const handleHandSelected = (handSelected: string) => {
    console.log(handSelected);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.areaChooses}>
        <PaperSelector onChoose={handleHandSelected} />

        <div className={styles.horizontalBar}></div>

        <ScissorsSelector onChoose={handleHandSelected} />

        <div className={styles.bottomCircleWrapper}>
          <RockSelector onChoose={handleHandSelected} />

          <div className={styles.diagonalBars}></div>
        </div>
      </div>
    </div>
  );
};
