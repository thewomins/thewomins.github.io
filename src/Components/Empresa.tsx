import React from "react";
import styles from "./Empresa.module.css";

type props = {
  text: string;
  onClickEmpresa: any;
  active: boolean;
};

const Empresa: React.FC<props> = ({text, onClickEmpresa, active}) => {
  return (
    <div
      className={`${styles.empresaContainer} ${
        active ? styles.empresaContainerActive : ""
      }`}
      onClick={onClickEmpresa}
    >
      <p>{text}</p>
    </div>
  );
};

export default Empresa;
