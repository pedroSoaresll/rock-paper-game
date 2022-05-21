import { useGame } from "../../../../../hooks";
import { EmptyHand } from "../../../components";
import { renderHandBySelection } from "../../../utils";
import styles from "./index.module.css";

export const YourPicked = () => {
  const { P1Hand } = useGame();

  if (!P1Hand) return null;

  const Pick = renderHandBySelection(P1Hand);

  return (
    <div className={styles.wrapper}>
      <span className={styles.pickedText}>You picked</span>
      <span className={styles.pickedText}>The house picked</span>

      {Pick}
      <EmptyHand />
    </div>
  );
};
