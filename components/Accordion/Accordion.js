import Link from "next/link";
import React, { useState } from "react";
import Abtstyles from "../../styles/About.module.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={Abtstyles.acordionItem}>
      <Link href="">
        <div
          className={Abtstyles.accordionTitle}
          onClick={() => setIsActive(!isActive)}
        >
          <div className="pr-3">{isActive ? "-" : "+"}</div>
          <div>{title}</div>
        </div>
      </Link>
      {isActive && <div className={Abtstyles.accordionContent}>{content}</div>}
    </div>
  );
};

export default Accordion;
