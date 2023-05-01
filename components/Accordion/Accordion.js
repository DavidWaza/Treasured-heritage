import Link from "next/link";
import styles from "../../styles/Home.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {items} from './index'

const Accordions = () => {
  return (
    <Accordion allowZeroExpanded>
      {items.map((item) => (
        <AccordionItem key={item.uuid}>
          <AccordionItemHeading className="text-white font-bold">
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
