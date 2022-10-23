import React from "react";
import {getIcon} from "src/utils/Icons";
import {TIcons, TProyect} from "../../types/types";
import Button from "../Button";
import Chip from "../Chip";
import styles from "./CardCarousel.module.css";

type props = {
  proyecto: TProyect;
  style?: string;
  focus?: boolean;
};

const CardCarousel: React.FC<props> = ({
  proyecto,
  style = "",
  focus = false,
}) => {
  const onClickButton = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`${styles.cardCarrousel} ${style}`}>
      <div className={`${styles.stateLayer} ${focus ? "" : styles.noFocus}`} />
      <div className={styles.image}>
        <img src={proyecto?.imagen} />
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>{proyecto?.nombreProyecto}</p>
        </div>
        <div className={styles.chipContainer}>
          {proyecto?.lenguajes.map((lenguaje, i) => (
            <Chip
              key={i}
              icon={getIcon(lenguaje as TIcons, "icon")}
              text={lenguaje}
            />
          ))}
        </div>
        <p className={styles.description}>{proyecto?.description}</p>
        <div className={styles.buttonContainer}>
          {Object.entries(proyecto?.links).map(([key, link], i) => (
            <Button
              key={i}
              text={
                key.includes("GitHub") ? key.replace("GitHub", "Código") : key
              }
              icon={getIcon(key as TIcons, "icon")}
              primary={i === 0}
              onClick={() => onClickButton(link)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
