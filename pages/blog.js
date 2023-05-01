import { Col, Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Blog = ({ data }) => {
  return (
    <>
      <div>
        <ul>
          <Row>
            {data &&
              data.articles.map((article) => (
                <Col sm={4} key={article.id}>
                  <div className={styles.blogWrapper}>
                    <Link href={article.source["url"]}>
                      <img src={article.image} alt="image" />
                      <div className={styles.blogContainer}>
                        <p className={styles.blogTitle}>{article.title}</p>
                        <p className={styles.blogDesc}>{article.description}</p>
                        <p className={styles.blogDesc}>{article.content}</p>
                        <div className={styles.blogAddInfo}>
                          <p>{article.source["name"]}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Col>
              ))}
          </Row>
        </ul>
      </div>
    </>
  );
};

export default Blog;

export async function getServerSideProps() {
  const apikey = "bb1d4854b5f708989a6e94761d9ea387";
  const url =
    "https://gnews.io/api/v4/top-headlines?category=&lang=en&country=us&max=10&apikey=" +
    apikey;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log("error", error);
    return {
      props: {
        data: [],
      },
    };
  }
}
