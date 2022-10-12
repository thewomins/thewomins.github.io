import styles from "./Presentation.module.css";

function Presentation() {
  return (
    <div className={styles.presentation}>
      <div className={styles.textConteiner}>
        <p className={styles.small}>Hola, mi nombre es</p>
        <p className={styles.big}>Felipe Urrutia</p>
        <p className={styles.medium}>Desarrollador Full-stack</p>
      </div>
    </div>
  );
}

export default Presentation;
