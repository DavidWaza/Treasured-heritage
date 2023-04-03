import styles from "../../styles/Home.module.css";
import { Container, Col, Row } from "react-bootstrap";

const EventData = (props) => {
  return (
    <>
      <div>
        <Container>
          <div>
            <div sm={12} className={styles.eventDate}>
              <p>{props.day}</p>
              <p>{props.date}</p>
            </div>
            <div className={styles.eventTitle}>
              <p>{props.activity}</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default EventData;
