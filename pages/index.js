// import { useState, useEffect } from "react";
import About from "../components/About";
import Herobanner from "../components/Herobanner";
import Program from "../components/Programs";
import Welcome from "../components/Welcome";
// import Testimony from "../components/Testimony";
import ContactPage from "../components/Contact";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Herobanner />
      <Welcome  />
      <About />
      <Program />
      <ContactPage />
      <Newsletter />
    </>
  );
}
