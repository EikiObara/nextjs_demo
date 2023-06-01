import styles from "./CardContainer.module.scss";

const CardContainer = ({ cards }: { cards: JSX.Element[] }) => (
  <div className={styles.cardContainer}>
    {cards.map((card, index) => (
      <div key={index} className={styles.card}>
        {card}
      </div>
    ))}
  </div>
);

export default CardContainer;
