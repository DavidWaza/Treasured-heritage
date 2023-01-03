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
          srcSet={props.srcSet}
          sizes={props.sizes}
          width={props.width}
          height={props.height}
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
