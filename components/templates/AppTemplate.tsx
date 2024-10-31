import styles from "./AppTemplate.module.scss";
import React from "react";
import AppFooter from "../molecules/AppFooter";

const AppTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.appTemplate}>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <AppFooter />
      </footer>
    </div>
  );
};

export default AppTemplate;
