import Chip from "../Components/Chip";
import styles from "./Contact.module.css";
import {ReactComponent as GitHub} from "./../assets/icons/GitHub.svg";
import {ReactComponent as LinkedIn} from "./../assets/icons/LinkedIn.svg";
import {getIcon} from "src/utils/Icons";
import React from "react";

const onClickChip = (link: string) => {
  window.open(link, "_blank", "noopener,noreferrer");
};
const Contact: React.FC = () => {
  return (
    <div id="Contacto" className={styles.contact}>
      <div className="titleContainer">
        <p className="titles">4. Contacto</p>
        <div className="line" />
      </div>
      <div className={styles.cardContacts}>
        <p className={styles.title}>¡Trabajemos juntos!</p>
        <p className={styles.description}>
          Si te gustaron mis proyectos y tienes una idea de sitio web o
          aplicación movíl, sintete libre de contactarme, mi inbox esta siempre
          abierto. Cualquier pregunta es bienvenida.
        </p>
        <div className={styles.chipContainer}>
          <Chip
            icon={getIcon("Email", "icon")}
            big={true}
            text="felipe.urrutia020@gmail.com"
            onClickChip={() =>
              onClickChip("mailto:felipe.urrutia020@gmail.com")
            }
          />
        </div>
        <div className={styles.redes}>
          <Chip
            onlyIcon={true}
            icon={<GitHub className="icon" />}
            big={true}
            text="GitHub"
            onClickChip={() => onClickChip("https://github.com/thewomins")}
          ></Chip>
          <Chip
            onlyIcon={true}
            icon={<LinkedIn className="icon" />}
            big={true}
            text="LinkedIn"
            onClickChip={() =>
              onClickChip("https://linkedin.com/in/felipe-urrutia-m")
            }
          ></Chip>
        </div>
      </div>
      <a
        href="https://github.com/thewomins/thewomins.github.io"
        className={styles.copy}
      >
        © Diseñado y hecho por Felipe Urrutia
      </a>
    </div>
  );
};

export default Contact;
