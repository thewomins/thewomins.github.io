import React, { Ref, useImperativeHandle, useState } from "react";
import { refChip } from "../types/types";
import styles from "./Chip.module.css";

type props={
    big?:boolean,
    text:string,
    icon?: any,
    onClickChip?:any,
}

// eslint-disable-next-line react/display-name
const Chip = React.forwardRef(({big=false,text,icon,onClickChip}:props,ref:Ref<refChip>) => {

    const [showLabel,setShowLabel] = useState(true);

    useImperativeHandle(ref, () => ({
      setLabel:(showLabel:boolean)=>{
        setShowLabel(showLabel);
      },
      labelShow:showLabel
    }));

  return (
    <div 
    className={`${styles.chip} ${big ? styles.big:""} ${showLabel ? "":styles.noLabel}`}
    onClick={()=>onClickChip()}>
        <div className={styles.image}>
            {icon}
        </div>
      <p>{text}</p>
    </div>
  );
});

export default Chip;
