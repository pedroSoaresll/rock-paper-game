import styles from "./index.module.css";

interface HandSelectorBaseProps {
  variant: Variants;
  children?: React.ReactNode;
}

type Variants = "paper" | "rock" | "scissors";

const variants: Record<Variants, string> = {
  paper: styles["outBox--paper"],
  scissors: styles["outBox--scissors"],
  rock: styles["outBox--rock"],
};

export const HandSelectorBase: React.FC<HandSelectorBaseProps> = ({
  children,
  variant,
}) => {
  return (
    <div className={`${styles.outBox} ${variants[variant]}`}>
      <div className={styles.circle}>{children}</div>
    </div>
  );
};
