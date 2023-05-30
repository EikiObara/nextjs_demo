import styles from "./HintSentence.module.scss";
import Image from "next/image";

const HintSentence = ({ hint }: { hint: string }) => {
  return (
    <div className={styles.hintSentence}>
      <div className={styles.icon}>
        <Image
          src="/images/light_bulb.png"
          alt="(!)"
          width={18}
          height={18}
        />
      </div>
      <div>{hint}</div>
    </div>
  );
};

export default HintSentence;
