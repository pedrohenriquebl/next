"use client";

import styles from './postDetails.module.css';
import Image from 'next/image';

export default function PostDetails({ title, readingTime, date }) {
    return (
        <div className={styles.detailsWrapper}>
            <div className={styles.details}>
                <span className={styles.title}>
                    Categoria: <strong>{title}</strong>
                </span>
            </div>
            <div className={styles.card}>
                <Image
                    src={"./icons/white-clock.svg" }
                    alt="Clock Icon"
                    width={16}
                    height={16}
                    priority
                />
                <span>
                    {`${readingTime} ${readingTime === 1 ? 'minuto' : 'minutos'} de leitura`}
                </span>
            </div>
            <div className={styles.card}>
                <Image
                    src="/icons/calendar.svg"
                    alt="Calendar Icon"
                    width={16}
                    height={16}
                    priority
                />
                <span>{date}</span>
            </div>
        </div>
    )
}