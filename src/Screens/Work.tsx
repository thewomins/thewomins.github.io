import React from "react";
import {TWork} from "src/types/types";
import Experience from "../Components/Experience";
import styles from "./Work.module.css";

const data: TWork = {
  Approvecha: {
    cargo: "Mobile Developer",
    fechaInicio: "08/2022",
    fechaTermino: "10/2022",
    hechos: [
      "Developed new features and manteined code for the mobile aplication",
      "Worked with React Native Using Typescript",
    ],
  },
};

const Works: React.FC = () => {
  return (
    <div id="Experiencia" className={styles.works}>
      <div className="titleContainer">
        <p className="titles">2. Experiencia</p>
        <div className="line" />
      </div>
      <div className={styles.experienceContainer}>
        <Experience data={data} />
      </div>
    </div>
  );
};

export default Works;
