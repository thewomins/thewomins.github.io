import React from "react";
import styles from "./Dot.module.css";

type props = {
  active?: boolean;
};

const Dot: React.FC<props> = ({active = false}) => {
  return (
    <div className={`${styles.dot} ${active ? styles.dotActive : ""}`}></div>
  );
};

export default Dot;
