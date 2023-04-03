import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const Accordions = ({ title, content }) => {
  const items = [
    {
      uuid: 1,
      heading: "REDEMPTION TERM BEGINNING 2020/2021 NEWS LETTER",
      content: "download NewsLetter",
      link: "https://treasuredheritageschool.com/wp-content/uploads/2020/12/REDEMPTION-TERM-ENDING-OF-SESSION-2020-2021-NEWS-LETTER.pdf",
    },
    {
      uuid: 2,
      heading: "REDEMPTION TERM ENDING 2020/2021 NEWS LETTER",
      content: "download NewsLetter",
      link: "https://treasuredheritageschool.com/wp-content/uploads/2020/12/REDEMPTION-TERM-ENDING-OF-SESSION-2020-2021-NEWS-LETTER.pdf",
    },
    {
      uuid: 3,
      heading: "REDEMPTION TERM BEGINNING 2019/2020 NEWS LETTER",
      content: "download NewsLetter",
      link: "https://treasuredheritageschool.com/wp-content/uploads/2020/08/REDEMPTION-TERM-BEGINNING-OF-SESSION-2019-2020-NEWS-LETTER.pdf",
    },
    {
      uuid: 4,
      heading: "REDEMPTION TERM ENDING 2019/2020 NEWS LETTER",
      content: "download NewsLetter",
      link: "https://treasuredheritageschool.com/wp-content/uploads/2020/08/REDEMPTION-TERM-ENDING-OF-SESSION-2019-2020-NEWS-LETTER-2.pdf",
    },
    {
      uuid: 5,
      heading: "GRACE TERM BEGINNING 2019/2020 NEWS LETTER",
      content: "download NewsLetter",
      link: "https://treasuredheritageschool.com/wp-content/uploads/2020/08/GRACE-TERM-BEGINNING-OF-SESSION-2019-2020-NEWS-LETTER-2nd.pdf",
    },
    {
      uuid: 6,
      heading: "GRACE TERM ENDING 2019/2020 NEWS LETTER",
      content: "download NewsLetter",
      link: "https://treasuredheritageschool.com/wp-content/uploads/2020/08/ENDING-OF-GRACE-TERM-SESSION-2019-2020-NEWS-LETTER-LATEST.pdf",
    },
    {
      uuid: 7,
      heading: "HIGHER GROUND TERM BEGINNING 2019/2020 NEWS LETTER",
      content: "download NewsLetter",
      link: "https://treasuredheritageschool.com/wp-content/uploads/2020/08/HIGHER-GROUND-TERM-BEGINNING-OF-SESSION-2019-2020-NEWS-LETTER.pdf",
    },
    {
      uuid: 8,
      heading: "HIGHER GROUND TERM ENDING 2019/2020 NEWS LETTER",
      content: "download NewsLetter",
      link: "https://treasuredheritageschool.com/wp-content/uploads/2020/12/HIGHER-GROUND-TERM-ENDING-OF-SESSION-2019-2020-NEWS-LETTER.pdf",
    },
  ];
  return (
    <Accordion allowZeroExpanded>
      {items.map((item) => (
        <AccordionItem key={item.uuid}>
          <AccordionItemHeading>
            <AccordionItemButton>{item.heading}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Link href={item.link} className={styles.accordionTitle}>
              {item.content}
            </Link>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Accordions;
