import styles from "./HintSentence.module.scss";
import utilStyles from "../../styles/utils.module.css"
import Image from "next/image";

const HintSentence = ({ hint }: { hint: string }) => {
  return (
    <div className={styles.hintSentence}>
      <div className={styles.icon}>
        <Image
          src="/images/light_bulb.png"
          alt="(!)"
          width={20}
          height={20}
        />
      </div>
      <div className={utilStyles.sentence}>{hint}</div>
    </div>
  );
};

export default HintSentence;
