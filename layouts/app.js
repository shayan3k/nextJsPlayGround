import React from "react";
import Head from "next/head";
import styles from "../styles/index.module.css";

export default function app({ children, rest }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
}
