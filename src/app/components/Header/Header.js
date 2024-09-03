import styles from './header.module.css';
import Image from "next/image";

export default function Header() {
    return (
        <header className={styles.header}>
            <Image
                src="images/author.svg"
                alt="Author Logo"
                className={styles.logo}
                width={64}
                height={64}
                priority
            />
            <h1 className={styles.title}>DESIGN BETTER. FASTER. TOGETHER.</h1>
            <h2 className={styles.subtitle}>The digital product design platform powering the world’s best user experiences</h2>
        </header>
    );
}