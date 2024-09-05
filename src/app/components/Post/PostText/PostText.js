import styles from './postText.module.css'

export default function PostText({ text }) {
    return (
        <div className={styles.textContainer}>
            {Object.values(text).map((paragraph, index) => (
                <p key={index} className={styles.text}>
                    {paragraph}
                </p>
            ))}
        </div>
    )
}