import React from "react";
import {useLanguage} from "src/hooks/Language";
import {TProyect} from "src/types/types";
import Carousel from "../Components/Carrousel/Carousel";
import styles from "./Proyects.module.css";

const Proyects: React.FC = () => {
  const {
    Language: {text},
  } = useLanguage();

  const data: TProyect[] = [
    {
      nombreProyecto: text.nombreProyecto1,
      imagen: require("src/assets/toDo.JPG"),
      lenguajes: ["TypeScript", "React"],
      description: text.descripcionProyecto1,
      links: {
        ["Web"]: "https://thewomins.github.io/To-do-ts/",
        ["GitHub"]: "https://github.com/thewomins/To-do-ts",
      },
    },
    {
      nombreProyecto: text.nombreProyecto2,
      imagen: require("src/assets/captura_prog1.JPG"),
      lenguajes: ["Python", "Tkinter"],
      description: text.descripcionProyecto2,
      links: {
        ["GitHub"]: "https://github.com/thewomins/Administrar-crypto-",
      },
    },
    {
      nombreProyecto: text.nombreProyecto3,
      imagen: require("src/assets/captura_prog2.jpg"),
      lenguajes: ["Java"],
      description: text.descripcionProyecto3,
      links: {
        ["Google Play Store"]:
          "https://play.google.com/store/apps/details?id=com.ominscorp.promedios",
      },
    },
    {
      nombreProyecto: text.nombreProyecto4,
      imagen: require("src/assets/tren.png"),
      lenguajes: ["Python", "Fast Api", "JavaScript", "MongoDb"],
      description: text.descripcionProyecto4,
      links: {
        ["GitHub Frontend"]: "https://github.com/thewomins/Frontend_tren",
        ["GitHub Backend"]: "https://github.com/thewomins/Backend_tren",
      },
    },
  ];
  return (
    <div id="Proyectos" className={styles.proyects}>
      <div className="titleContainer">
        <p className="titles">{text.proyectsTitulo}</p>
        <div className="line" />
      </div>
      <div className={styles.proyectsContainer}>
        <Carousel proyects={data} />
      </div>
    </div>
  );
};

export default Proyects;
