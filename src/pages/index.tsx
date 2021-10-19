import type { NextPage } from "next";
import Head from "next/head";
import MemeImagesList from "../features/meme-images-list/MemeImagesList";
import styles from "./Index.module.css";

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Memes Generator with Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MemeImagesList />
    </div>
  );
};

export default IndexPage;
