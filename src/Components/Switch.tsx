import React from "react";
import styles from "./Switch.module.css";

type props = {
  state: boolean;
  onChangeCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Switch: React.FC<props> = ({state, onChangeCheck}) => {
  return (
    <label className={styles.switch}>
      <input
        type={"checkbox"}
        onChange={(e) => onChangeCheck(e)}
        checked={state}
      />
      <span className={styles.slider}></span>
    </label>
  );
};

export default Switch;
