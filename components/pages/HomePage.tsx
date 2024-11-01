import { SITE_TITLE, SITE_MAP } from "../../lib/constants";
import LinkButton from "../atoms/LinkButton";
import styles from "./HomePage.module.scss";
import fontStyles from "../../styles/utils.module.css";
import TextUtil from "@/lib/processor/text";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.title}>
        {TextUtil.splitTextToPiece(SITE_TITLE, 2).map((text, index) => (
          <div className={fontStyles.title} key={index}>
            {text}
          </div>
        ))}
      </div>
      <div className={styles.menu}>
        <div className={styles.controlPanel}>
          <div className={styles.title}>
            <div className={fontStyles.heading}>Level</div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.button}>
              <LinkButton text="Coder" url={SITE_MAP.GAME.QUESTION.CODER} />
            </div>
            <div className={styles.button}>
              <LinkButton
                text="Programmer"
                url={SITE_MAP.GAME.QUESTION.PROGRAMMER}
              />
            </div>
            <div className={styles.button}>
              <LinkButton
                text="Web Engineer"
                url={SITE_MAP.GAME.QUESTION.WEB_ENGINEER}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
