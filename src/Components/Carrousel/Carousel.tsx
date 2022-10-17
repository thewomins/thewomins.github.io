import React, {useEffect, useState} from "react";
import {TProyect} from "../../types/types";
import CardCarousel from "./CardCarousel";
import styles from "./Carousel.module.css";
import Dot from "./Dot";
import {ReactComponent as Next} from "src/assets/icons/Next.svg";

type props = {
  proyects: TProyect[];
};

type card = {
  cardBefore: number | undefined;
  cardActive: number;
  cardAfter: number | undefined;
};

const Carousel: React.FC<props> = ({proyects}) => {
  const [cardOrder, setCardOrder] = useState<card>({
    cardBefore: undefined,
    cardActive: 0,
    cardAfter: 1,
  });

  useEffect(() => {
    console.log("cardOrder", cardOrder);
  }, [cardOrder]);

  useEffect(() => {
    setStyle(1);
  });

  const calcPos = (
    base: number,
    number: number,
    maxNumber: number,
    minNumber = 0,
  ) => {
    const calc = base + number;
    console.log("calc", calc);
    if (calc > maxNumber || calc < minNumber) return undefined;
    return calc;
  };

  const onClickBefore = () => {
    if (cardOrder.cardBefore === undefined) {
      return;
    }
    setCardOrder({
      ...cardOrder,
      cardBefore: calcPos(cardOrder.cardActive, -2, proyects.length - 1),
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      cardActive: calcPos(cardOrder.cardActive, -1, proyects.length - 1)!,
      cardAfter: cardOrder.cardActive,
    });
  };

  const onClickNext = () => {
    if (cardOrder.cardAfter === undefined) {
      return;
    }
    setCardOrder({
      ...cardOrder,
      cardBefore: cardOrder.cardActive,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      cardActive: calcPos(cardOrder.cardActive, 1, proyects.length - 1)!,
      cardAfter: calcPos(cardOrder.cardActive, 2, proyects.length - 1),
    });
  };

  //return key of object
  const setStyle = (pos: number) => {
    const entry = Object.entries(cardOrder).find((key) => key[1] === pos) || "";
    return entry[0];
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.cardsContainer}>
        <Next
          className={styles.operadoresL}
          onClick={() => onClickBefore()}
        ></Next>
        <CardCarousel proyecto={proyects[0]} style={styles.invisible} />
        {proyects.map((proyect, i) => (
          <CardCarousel
            style={
              styles.cardCenter +
              " " +
              styles.invisible +
              " " +
              styles[setStyle(i)]
            }
            key={i}
            focus={cardOrder.cardActive === i}
            proyecto={proyect}
          />
        ))}
        <Next
          className={styles.operadores}
          onClick={() => onClickNext()}
        ></Next>
      </div>
      <div className={styles.positionCarousel}>
        {proyects.map((proyect, i) => (
          <Dot key={i} active={cardOrder.cardActive === i} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
