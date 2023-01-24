import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

function Post() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <div className={styles.postTitle}>
        <p>{id}</p>
      </div>
      <div>
        <iframe
          src="https://widget.taggbox.com/120115"
          className={styles.iframePost}
        ></iframe>
      </div>
    </>
  );
}
export default Post;

export async function getInitialProps({ query }) {
  console.log(query.id);
}
