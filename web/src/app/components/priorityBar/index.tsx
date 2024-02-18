import React from "react";
import styles from "./index.module.css";

type PriorityBarProps = {
  value: number;
};

export const PriorityBar: React.FC<PriorityBarProps> = ({ value }) => {
  const barWidth = `${(value - 1) * 20}%`;

  return (
    <span className={styles.priorityBar}>
      <div className={styles.bar} style={{ width: barWidth }} />
    </span>
  );
};
