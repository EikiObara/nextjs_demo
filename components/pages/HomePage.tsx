import { SITE_TITLE, SITE_MAP } from "../../lib/constants";
import LinkButton from "../atoms/LinkButton";
import styles from "./HomePage.module.scss";
import fontStyles from "../../styles/utils.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.title}>
        <div className={fontStyles.title}>{SITE_TITLE}</div>
      </div>
      <div className={styles.buttons}>
        <LinkButton text="始める" url={SITE_MAP.QUESTION} />
      </div>
    </div>
  );
};

export default HomePage;
