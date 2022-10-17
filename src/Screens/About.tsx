import Chip from "../Components/Chip";
import styles from "./About.module.css";
import {ReactComponent as Email} from "./../assets/icons/Email.svg";
import {getIcon} from "src/utils/Icons";
import {TIcons} from "src/types/types";
import React from "react";

const datos = {
  lenguajes: ["Python", "TypeScript", "JavaScript", "Go", "Java", "C#", "SQL"],
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
  return (
    <div id="Acerca de" className={styles.container}>
      <div className="titleContainer">
        <p className="titles">1. Acerca de</p>
        <div className="line" />
      </div>
      <div className={styles.cardAbout}>
        <div className={styles.description}>
          <p>
            Analista programador titulado de CFT Inacap con 3 meses de
            experiencia en el desarrollo de software. Buscando probar mis
            habilidades, apasionado por la tecnología y siempre buscando mejorar
            mis habilidades.
          </p>
        </div>
        <div className={styles.cardlanguajes}>
          <div className={styles.languajesContainer}>
            <p className={styles.titulo}> Lenguajes de programación </p>
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
            <p className={styles.titulo}>
              {" "}
              Librerias, Frameworks, Herramientas{" "}
            </p>
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
