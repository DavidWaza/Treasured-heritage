import Accordion from "./Accordion";
import Abtstyles from "../../styles/About.module.css";

const AccordionArr = () => {
  const accordionData = [
    {
      id: 1,
      title: "THS Campus",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`,
    },
    {
      id: 2,
      title: "THS History",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`,
    },
  ];
  return (
    <div className={Abtstyles.accordion}>
      {accordionData.map(({ id, title, content }) => (
        <Accordion key={id} title={title} content={content} />
      ))}
    </div>
  );
};

export default AccordionArr;
