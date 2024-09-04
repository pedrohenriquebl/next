import styles from './banner.module.css'

export default function Banner({ src, description, source}) {

    return (
        <div className={styles.bannerWrapper}>
            <img
                className={styles.banner}
                src={src}
                alt={description}
                loading={"lazy"}
            />
            <span className={styles.description}>{description}</span>
            <span className={styles.source}>
                <small>{source}</small>
            </span>
        </div>
    )
}