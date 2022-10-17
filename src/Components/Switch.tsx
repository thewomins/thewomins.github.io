import React from "react";
import styles from "./Switch.module.css";

type props = {
  state: boolean;
  onChangeCheck: any;
};

const Switch: React.FC<props> = ({state, onChangeCheck}) => {
  return (
    <label className={styles.switch}>
      <input
        type={"checkbox"}
        onChange={(e: any) => onChangeCheck(e)}
        defaultChecked={state}
      />
      <span className={styles.slider}></span>
    </label>
  );
};

export default Switch;
