import React from "react";
import Link from "next/link";
import Head from "next/head";
import collections from "../../data/card.json";
import Content from "../../components/content/content.component";


import styles from "../../styles/Home.module.css";

export default function Info() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ios - Collections</title>
      </Head>
      
      <div>
      {collections.map((collection) => (
            <Content key={collection.id} {...collection} />
          ))}
       
      </div>
    </div>
  );
};

