// import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css"
import About from "../components/About";
import Herobanner from "../components/Herobanner";
import Program from "../components/Programs";
import Welcome from "../components/Welcome";
import ContactPage from "../components/Contact";
import Newsletter from "../components/Newsletter";
import { Notice } from "../components/Notice";
import Testimonial from "../components/Testimonial";

export default function Home() {
  const Content = "college, high-school, school, mentossori";
  const { Keyword } = "keyword";
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" v />
        <title>Treasured heritage school</title>
        <meta name={Keyword} content={Content} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
        />
      </Head>
      <div className={styles.homeBody}>
        <Herobanner />
        <Notice />
        <Welcome />
        <About />
        <Program />
        <ContactPage />
        <Testimonial />
        <Newsletter />
      </div>
    </>
  );
}
