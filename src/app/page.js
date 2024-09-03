import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post"

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Post />
    </main>
  );
}
