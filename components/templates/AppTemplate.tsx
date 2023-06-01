import Head from "next/head";
import styles from "./AppTemplate.module.css";
import React from "react";
import HeadInfo from "../meta/HeadInfo";
import AppHeader from "../molecules/AppHeader";
import AppFooter from "../molecules/AppFooter";

const AppTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.appTemplate}>
      <Head>
        <HeadInfo />
      </Head>
      <header className={styles.header}>
        <AppHeader />
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <AppFooter />
      </footer>
    </div>
  );
};

export default AppTemplate;
