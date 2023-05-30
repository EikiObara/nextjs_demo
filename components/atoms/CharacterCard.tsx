import styles from "./CharacterCard.module.scss";

const CharacterCard = ({ character }: { character: string }) => (
  <div className={styles.characterCard}>{character}</div>
);

export default CharacterCard;
