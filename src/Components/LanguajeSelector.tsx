import React from "react";
import {useLanguage} from "src/hooks/Language";
import {Languages} from "src/types/types";
import styles from "./LanguajeSelector.module.css";

type props = {
  languageList?: Languages[];
  language: Languages;
};

const LanguajeSelector: React.FC<props> = ({languageList, language}) => {
  const {dispatchLanguage} = useLanguage();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatchLanguage({
      type: "setLanguage",
      Language: e.target.value as Languages,
    });
  };

  return (
    <div className={styles.languaje}>
      <select id="Languages" value={language} onChange={(e) => handleSelect(e)}>
        {languageList?.map((lenguaje, index) => (
          <option key={index} value={lenguaje}>
            {lenguaje}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguajeSelector;
