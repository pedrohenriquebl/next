import styles from './quote.module.css';

export default function Quote({ quote }) {
    return (
        <div className={styles.quoteWrapper}>
            <span className={styles.quote}>“</span>
            <span className={styles.text}>
                {quote}
            </span>
            <span className={styles.quote}>”</span>
        </div>
    )
}