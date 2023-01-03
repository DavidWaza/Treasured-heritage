import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const GalleryImg = (props) => {
  return (
    <>
      <div className={styles.coverImg}>
        <Image
          src={props.src}
          alt={props.alt}
          fill
          objectPosition="center"
          objectSize="cover"
        />
      </div>
      <div className={styles.coverTitle}>
        <Link href={props.link} as={props.as}>
          <p>{props.title}</p>
        </Link>
      </div>
    </>
  );
};

export default GalleryImg;
