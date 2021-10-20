import type { NextPage } from "next";
import Head from "next/head";
import MemeImagesList from "../features/meme-images-list/MemeImagesList";
import Dashboard from "features/dashboard/Dashboard";
import styles from "./Index.module.css";

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Memes Generator with Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Dashboard />
      </div>
      <div className={styles.sidebar}>
        <MemeImagesList />
      </div>
    </div>
  );
};

export default IndexPage;
