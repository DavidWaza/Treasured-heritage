import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const GalleryImg = (props) => {
  return (
    <>
      <Link href={props.link} as={props.as}>
        <label className={styles.card}>
          <div className={styles.cardBody}>
            <div className={styles.cardBodyCover}>
              <img
                alt="img"
                className={styles.cardBodyCoverImage}
                src={props.src}
              />
              <span className={styles.cardBodyCoverCheckbox}>
                <svg
                  className={styles.cardBodyCoverCheckboxSvg}
                  viewBox="0 0 12 10"
                >
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
            </div>
            <header className={styles.cardBodyHeader}>
              <p className={styles.cardBodyHeaderSubtitle}>{props.category}</p>
              <h2 className={styles.cardBodyHeaderTitle}>{props.title}</h2>
            </header>
          </div>
        </label>
      </Link>
    </>
  );
};

export default GalleryImg;
