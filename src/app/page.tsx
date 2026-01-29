import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />

      <div className={styles.hero}>
        <h1 className={styles.title}>
          Build your dream<br />website in seconds.
        </h1>
        <p className={styles.subtitle}>
          Just describe what you need, and our AI will generate a production-ready website for you. No coding required.
        </p>
        <Link href="/builder" className={styles.cta}>
          Start Building →
        </Link>
      </div>
    </main>
  );
}
