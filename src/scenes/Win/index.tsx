import { SelectorCircle } from "../../components/SelectorCircle";
import styles from "./index.module.css";

export const Win: React.FC = () => {
  return (
    <div className={styles["area-selector-circle"]}>
      <SelectorCircle />
    </div>
  );
};
