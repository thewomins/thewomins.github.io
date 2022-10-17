import React, {useEffect, useState} from "react";
import {TWork} from "src/types/types";
import Empresa from "./Empresa";
import styles from "./Experience.module.css";

type props = {
  data: TWork;
};

const Experience: React.FC<props> = ({data}) => {
  const [keyToShow, setKeyToShow] = useState(Object.keys(data)[0]);

  useEffect(() => {
    console.log("ket to show: ", keyToShow);
  }, [keyToShow]);

  const onClickEmpresa = (key: string) => {
    console.log("click ", key);
    setKeyToShow(key);
  };

  return (
    <div className={styles.cardExperience}>
      <div className={styles.empresasContainer}>
        {Object.entries(data).map(([key, value], i) => {
          console.log("key", key);
          console.log("value", value);
          console.log("i", i);
          return (
            <Empresa
              text={key}
              onClickEmpresa={() => onClickEmpresa(key)}
              key={i}
              active={key === keyToShow ? true : false}
            />
          );
        })}
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <p>{data[keyToShow].cargo}</p>
          <p className={styles.company}>‎ @{keyToShow}</p>
        </div>
        <div className={styles.dates}>
          <p>{data[keyToShow].fechaInicio} - ‎</p>
          <p>{data[keyToShow].fechaTermino}</p>
        </div>
        <ul className={styles.hechosContaner}>
          {data[keyToShow].hechos.map((hecho, i) => (
            <li key={i}>{hecho}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
