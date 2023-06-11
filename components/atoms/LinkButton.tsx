import Router from 'next/router';
import styles from "./LinkButton.module.scss";

const LinkButton = ({ url, text }: { url: string; text: string }) => {
  return (
    <div className={styles.linkButton} onClick={() => Router.push(url)}>
      {text}
    </div>
  );
};

export default LinkButton;
