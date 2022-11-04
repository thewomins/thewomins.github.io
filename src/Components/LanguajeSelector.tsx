import React from "react";
import {Languages} from "src/types/types";
import styles from "./LanguajeSelector.module.css";

type props = {
  languageList?: Languages[];
  language: Languages;
  setSelectedLanguage: (leng: Languages) => void;
};

const LanguajeSelector: React.FC<props> = ({
  languageList,
  setSelectedLanguage,
  language,
}) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value as Languages);
  };

  return (
    <div className={styles.languaje}>
      <select
        id="Languages"
        defaultValue={language}
        onChange={(e) => handleSelect(e)}
      >
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
