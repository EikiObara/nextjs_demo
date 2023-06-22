import styles from "./HorizontalButtons.module.scss";

const HorizontalButtons = ({ buttons }: { buttons: JSX.Element[] }) => {
  return (
    <div className={styles.horizontalButtons}>
      {buttons.map((button, index) => (
        <div key={index} className={styles.button}>
          {button}
        </div>
      ))}
    </div>
  );
};

export default HorizontalButtons;
