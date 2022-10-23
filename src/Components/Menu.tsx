import React from "react";
import styles from "./Menu.module.css";
import {MdModeNight} from "react-icons/md";
import Switch from "./Switch";
import ButtonMenu from "./ButtonMenu";
import {TScreens} from "src/types/types";

type props = {
  state: boolean;
  onChangeCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  screens: TScreens[];
};

const Menu: React.FC<props> = ({state, onChangeCheck, screens}) => {
  return (
    <div className={styles.menu}>
      <div className={styles.buttonsContainer}>
        {screens.map((key, i) => (
          <ButtonMenu key={i} text={key} to={key} />
        ))}
      </div>
      <div className={styles.nightModeContainer}>
        <MdModeNight className={styles.iconNight} />
        <Switch state={state} onChangeCheck={(e) => onChangeCheck(e)} />
      </div>
    </div>
  );
};

export default Menu;
