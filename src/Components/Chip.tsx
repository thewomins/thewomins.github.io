import React, {useState} from "react";
import styles from "./Chip.module.css";

type props = {
  big?: boolean;
  text: string;
  onlyIcon?: boolean;
  icon?: React.ReactNode;
  onClickChip?: () => void;
};

// eslint-disable-next-line react/display-name
const Chip: React.FC<props> = ({
  big = false,
  text,
  icon,
  onlyIcon = false,
  onClickChip,
}) => {
  const [showIcon, setShowIcon] = useState(onlyIcon);

  const onMouseEnter = () => {
    setShowIcon(false);
  };

  const onMouseLeave = () => {
    setShowIcon(true);
  };

  return (
    <div
      className={`${styles.chip} ${
        showIcon && onlyIcon ? styles.noLabel : ""
      } ${big ? styles.big : ""} ${onClickChip ? styles.link : ""}`}
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}
      onClick={onClickChip}
    >
      <div className={styles.image}>{icon}</div>
      <p>{text}</p>
    </div>
  );
};

export default Chip;
