import React, {useEffect} from "react";
import styles from "./Menu.module.css";
import {MdModeNight} from "react-icons/md";
import Switch from "./Switch";
import ButtonMenu from "./ButtonMenu";
import {TScreens} from "src/types/types";
import LanguajeSelector from "./LanguajeSelector";
import {useLanguage} from "src/hooks/Language";

type props = {
  state: boolean;
  onChangeCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  screens: TScreens;
};

const Menu: React.FC<props> = ({state, onChangeCheck, screens}) => {
  const {
    Language: {language},
  } = useLanguage();

  useEffect(() => {
    console.log(language);
  }, [language]);

  return (
    <div className={styles.menu}>
      <div className={styles.buttonsContainer}>
        {Object.entries(screens).map(([key, value], i) => (
          <ButtonMenu key={i} text={value} to={key} />
        ))}
      </div>
      <div className={styles.nightModeContainer}>
        <MdModeNight className={styles.iconNight} />
        <Switch state={state} onChangeCheck={(e) => onChangeCheck(e)} />
      </div>
      <div className={styles.languajeSelectorContainer}>
        <LanguajeSelector
          language={language}
          languageList={["Español", "English"]}
        />
      </div>
    </div>
  );
};

export default Menu;
