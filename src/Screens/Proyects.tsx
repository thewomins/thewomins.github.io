import React from "react";
import {TProyect} from "src/types/types";
import Carousel from "../Components/Carrousel/Carousel";
import styles from "./Proyects.module.css";

const data: TProyect[] = [
  {
    nombreProyecto: "To-do",
    imagen: require("src/assets/toDo.JPG"),
    lenguajes: ["TypeScript", "React"],
    description: "Aplicacion web para gestionar tareas",
    links: {
      ["Web"]: "https://thewomins.github.io/To-do-ts/",
      ["GitHub"]: "https://github.com/thewomins/To-do-ts",
    },
  },
  {
    nombreProyecto: "Administración Crypto",
    imagen: require("src/assets/captura_prog1.JPG"),
    lenguajes: ["Python", "Tkinter"],
    description:
      "Programa realizado para tener control sobre las inversiones en crypto monedas. leyendo desde una API publica los valores de cada moneda",
    links: {
      ["GitHub"]: "https://github.com/thewomins/Administrar-crypto-",
    },
  },
  {
    nombreProyecto: "Promedio Ponderado",
    imagen: require("src/assets/captura_prog2.jpg"),
    lenguajes: ["Java", "React"],
    description:
      "Programa para calcular el promedio ponderado de multiples calificaciones. Disponible en Google play store",
    links: {
      ["Google Play Store"]:
        "https://play.google.com/store/apps/details?id=com.ominscorp.promedios",
    },
  },
  {
    nombreProyecto: "Sistema compra pasajes para trenes",
    imagen: require("src/assets/tren.png"),
    lenguajes: ["Python", "Fast Api", "JavaScript", "MongoDb"],
    description:
      "Programa con una interfaz de usuario y administrador la cual permite ingresar los datos de recorridos a una base de datos de mongoDB a travez de una API Rest y en la cual un usuario puede comprar un pasaje en estos recorridos",
    links: {
      ["GitHub Frontend"]: "https://github.com/thewomins/Frontend_tren",
      ["GitHub Backend"]: "https://github.com/thewomins/Backend_tren",
    },
  },
];
const Proyects: React.FC = () => {
  return (
    <div id="Proyectos" className={styles.proyects}>
      <div className="titleContainer">
        <p className="titles">3. Proyectos</p>
        <div className="line" />
      </div>
      <div className={styles.proyectsContainer}>
        <Carousel proyects={data} />
      </div>
    </div>
  );
};

export default Proyects;
