import Head from "next/head";
import Image from "next/image";
import Card from "../components/card/card.component";
import styles from "../styles/Home.module.css";
import collections from "../data/card.json";
import { id } from "prelude-ls";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ios - Collections</title>
        <meta name="description" content="ios Collections" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>Collections</h2>
        <div className={styles.head}>
          <h2>What&apos;s New</h2>
          <small>10 tips</small>
        </div>
        <div>
          {collections.map((collection) => (
            <Card key={collection.id} {...collection} />
          ))}
        </div>
      </main>
    </div>
  );
}
