import Chip from "../Components/Chip";
import styles from "./About.module.css";
import {getIcon} from "src/utils/Icons";
import {TIcons} from "src/types/types";
import React from "react";
import {useLanguage} from "src/hooks/Language";

const datos = {
  lenguajes: ["Python", "TypeScript", "JavaScript", "Java", "C#", "SQL"],
  frameworks: [
    "React",
    "React Native",
    "Node.js",
    "Fast Api",
    "Express",
    "Docker",
  ],
};

const About: React.FC = () => {
  const {
    Language: {text},
  } = useLanguage();

  return (
    <div id="Acerca de" className={styles.container}>
      <div className="titleContainer">
        <p className="titles">{text.aboutTitulo}</p>
        <div className="line" />
      </div>
      <div className={styles.cardAbout}>
        <div className={styles.description}>
          <p>{text.aboutDescripcion}</p>
        </div>
        <div className={styles.cardlanguajes}>
          <div className={styles.languajesContainer}>
            <p className={styles.titulo}> {text.aboutTituloLenguajes} </p>
            <div className={styles.languajes}>
              {/*Chips languajes here */}
              {datos.lenguajes.map((lenguaje, i) => (
                <Chip
                  key={i}
                  icon={getIcon(lenguaje as TIcons, "icon")}
                  text={lenguaje}
                />
              ))}
            </div>
          </div>
          <div className={styles.separator} />
          <div className={styles.toolsContainer}>
            <p className={styles.titulo}>{text.aboutTituloFrameworks}</p>
            <div className={styles.tools}>
              {/*Chips frameworks, libraries, tools here */}
              {datos.frameworks.map((frameworks, i) => (
                <Chip
                  key={i}
                  icon={getIcon(frameworks as TIcons, "icon")}
                  text={frameworks}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
