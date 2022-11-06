import React from "react";
import styles from "./ButtonMenu.module.css";

import {Link} from "react-scroll";

type props = {
  text: string;
  to: string;
};

const ButtonMenu: React.FC<props> = ({to, text}) => {
  console.log(to, text);
  return (
    <Link
      to={to}
      offset={-50}
      spy={true}
      smooth={true}
      className={styles.button}
    >
      <p>{text}</p>
    </Link>
  );
};

export default ButtonMenu;
