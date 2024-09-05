"use client";

import styles from './header.module.css';
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('theme') === 'dark';
        setIsDarkMode(savedMode);
        document.body.classList.toggle('dark-mode', savedMode);
    }, []);

    const toggleTheme = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        document.body.classList.toggle('dark-mode', newDarkMode);
        localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    };

    return (
        <header className={styles.header}>
            <button className={styles.toggle} onClick={toggleTheme}>
                {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
            <Image
                src="images/author.svg"
                alt="Author Logo"
                className={styles.logo}
                width={64}
                height={64}
                priority
            />
            <h1 className={styles.title}>DESIGN BETTER. FASTER. TOGETHER.</h1>
            <h2 className={styles.subtitle}>The digital product design platform powering the world’s best user
                experiences</h2>
        </header>
    );
}