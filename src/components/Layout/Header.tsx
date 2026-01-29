import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <span>✨</span> AI Builder
            </div>
            <div className={styles.actions}>
                <button className={styles.button}>Log In</button>
                <button className={styles.primaryButton}>Export</button>
            </div>
        </header>
    );
}
