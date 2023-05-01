import Image from "next/image";
import styles from '../styles/Home.module.css'

const Loading = () => {
  return (
    <div className={styles.loaderGif}>
        <Image
          src="/load.gif"
          width={100}
          height={100}
          alt="alt"
        />
      </div>
  );
};
export default Loading;
