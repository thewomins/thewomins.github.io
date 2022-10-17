import React from "react";
import styles from "./Button.module.css";

type props = {
  primary?: boolean;
  icon?: any;
  text: string;
  onClick?: any;
};

const Button: React.FC<props> = ({primary = false, onClick, text, icon}) => {
  return (
    <div
      className={`${styles.button} ${primary ? styles.primary : styles.secundary}`}
      onClick={() => onClick()}
    >
      <div className={styles.image}>{icon}</div>
      <p>{text}</p>
    </div>
  );
};

export default Button;
