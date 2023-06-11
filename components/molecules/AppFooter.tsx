import { SITE_TITLE } from "../../lib/constants";
import styles from "./AppFooter.module.scss";

const AppFooter = () => <div className={styles.appFooter}>{SITE_TITLE}</div>;

export default AppFooter;
