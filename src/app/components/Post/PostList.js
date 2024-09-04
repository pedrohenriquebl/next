import styles from './postList.module.css'

export default function PostList({ list }) {
    return (
        <div className={styles.listWrapper}>
            {Object.keys(list).filter(key => key !== 'topics').map((key, index) => (
                <p key={index} className={styles.text}>
                    {list[key]}
                </p>
            ))}

            {list && (
                <ul className={styles.listContainer}>
                    {list.topics.map((topic, index) => (
                        <li key={index}>
                            <span className={styles.text}>{topic}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}