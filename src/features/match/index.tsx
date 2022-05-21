import { useGame } from "../../hooks";
import { EmptyHand } from "../hands/components";
import { HandId, renderHandBySelection } from "../hands";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { getRandomHand } from "./utils";

export const Match = () => {
  const { P1Hand } = useGame();
  const [computerHand, setComputerHand] = useState<HandId>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setComputerHand(getRandomHand());
    }, 3000);

    return () => {
      clearTimeout(timer)
      setComputerHand(undefined)
    };
  }, []);

  const Pick = P1Hand && renderHandBySelection(P1Hand);
  const ComputerPick = computerHand && renderHandBySelection(computerHand);

  return (
    <div className={styles.wrapper}>
      <span className={styles.pickedText}>You picked</span>
      <span className={styles.pickedText}>The house picked</span>

      {Pick}
      {ComputerPick || <EmptyHand />}
    </div>
  );
};
