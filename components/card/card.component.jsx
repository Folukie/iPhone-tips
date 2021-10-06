import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ src, name, subhead, tips }) => {
  return (
    <Link href="/content/info">
      <a>
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src={src}
              alt="icon"
              height={144}
              width={144}
              objectFit="contain"
            />
          </div>

          <div className={styles.details}>
            <h2>{name}</h2>
            <p>{subhead}</p>
            <small>{tips} tips</small>
            <hr />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
