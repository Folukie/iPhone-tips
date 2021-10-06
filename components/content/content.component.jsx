import React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "./content.module.css";

const Content = ({ name, heading, content }) => {
  return (
    <div className={styles.collection}>
      <div className={styles.header}>
        <Link href="/">
          <a>Collections</a>
        </Link>
        <h4>{name}</h4>
      </div>
      <div className={styles.content}>
        <h5>{heading}</h5>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Content;
