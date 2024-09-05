"use client";

import Image from "next/image";
import { useEffect } from 'react';
import styles from "./page.module.css";
import Head from 'next/head';
import Header from "./components/Header/Header";
import Post from "./components/Post/Post"

export default function Home() {
    useEffect(() => {
        const savedMode = localStorage.getItem('theme');
        if (savedMode) {
            document.body.classList.add(savedMode === 'dark' ? 'dark-mode' : 'light-mode');
        }
    }, []);

  return (
      <>
          <Head>
              <title>Sudeste Online</title>
              <meta name="description" content="Sudeste Online Figma Layout"/>
              <meta property="og:title" content="Sudeste Online Figma Layout"/>
              <meta property="og:description" content="Sudeste Online Figma Layout"/>
              <meta property="og:image" content="https://lh3.googleusercontent.com/p/AF1QipNpVP9ge5yKt6h7sXBQXiKFad5R7NqaEWvjF4Kr=s680-w680-h510"/>
              <meta property="og:url" content="https://sudesteonline.com.br/"/>
              <meta property="og:type" content="website"/>
          </Head>
          <main className={styles.main}>
              <Header/>
              <Post/>
          </main>
      </>
  );
}
