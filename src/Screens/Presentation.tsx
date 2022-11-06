import {useLanguage} from "src/hooks/Language";
import styles from "./Presentation.module.css";

function Presentation() {
  const {
    Language: {text},
  } = useLanguage();

  return (
    <div className={styles.presentation}>
      <div className={styles.textConteiner}>
        <p className={styles.small}>{text.presentacionPrimero}</p>
        <p className={styles.big}>{text.presentacionNombre}</p>
        <p className={styles.medium}>{text.presentacionCargo}</p>
      </div>
    </div>
  );
}

export default Presentation;
