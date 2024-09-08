"use client";

import styles from './bookList.module.css';
import { useEffect, useState } from 'react';
import { fetchBooks } from '@/app/services/googleBooksApi';

export default function BookList({ headTitle, headText, bottomTitle, bottomText }) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks().then(setBooks).catch(console.error);
    }, []);

    return (
        <div className={styles.bookListWrapper}>
            <div className={styles.dataWrapper}>
                <h1 className={styles.title}>{headTitle}</h1>
                <p className={styles.text}>{headText}</p>
            </div>
            <div className={styles.booksWrapper}>
                {books.map((book, index) => (
                    <div key={index} className={styles.bookCard}>
                        <img src={book.cover} alt={book.title} className={styles.cover}/>
                        <h2 className={styles.bookTitle}>{book.title}</h2>
                        <span className={styles.author}>Autor: {book.authors}</span>
                    </div>
                ))}
            </div>
            <div className={styles.dataWrapper}>
                <h1 className={styles.title}>{bottomTitle}</h1>
                <p className={styles.text}>{bottomText}</p>
            </div>
        </div>
    );
}