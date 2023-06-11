import Head from "next/head";
import styles from "./AppTemplate.module.css";
import React from "react";
import HeadInfo from "../meta/HeadInfo";
import AppFooter from "../molecules/AppFooter";

const AppTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.appTemplate}>
      <Head>
        <HeadInfo />
      </Head>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <AppFooter />
      </footer>
    </div>
  );
};

export default AppTemplate;
