import styles from './postCard.module.css';
import Image from "next/image";

export default function PostCard({ posts, orientation = 'vertical' }) {
    return (
        <div
            className={
                orientation === 'horizontal'
                    ? styles.cardListHorizontal
                    : styles.cardListVertical
            }
        >
            {posts.map((post, index) => (
                <div key={index} className={styles.card}>
                    <img src={post.image} alt={post.title} className={styles.image}/>
                    <h2 className={styles.title}>{post.title}</h2>
                    <p className={styles.text}>{post.text}</p>
                    <div className={styles.detailsWrapper}>
                        <div className={styles.cardDetails}>
                            <Image
                                src="./icons/white-calendar.svg"
                                alt="Calendar Icon"
                                width={16}
                                height={16}
                                priority
                            />
                            <span>{
                                orientation === 'horizontal' ? post.date : (() => {
                                    const [day, month, year] = post.date.split('/');
                                    const shortMonth = month.slice(0,3);
                                    return `${day}/${shortMonth}/${year}`;
                                })()
                            }</span>
                        </div>
                        <div className={styles.cardDetails}>
                            <Image
                                src="./icons/white-clock.svg"
                                alt="Clock Icon"
                                width={16}
                                height={16}
                                priority
                            />
                            <span>
                                {orientation === 'vertical'
                                    ? `${post.readingTime} ${post.readingTime === 1 ? 'min' : 'min'} leitura`
                                    : `${post.readingTime} ${post.readingTime === 1 ? 'minuto' : 'minutos'} de leitura`}
                            </span>
                        </div>
                        <div className={styles.cardDetails}>
                            <Image
                                src="./icons/white-like.svg"
                                alt="Clock Icon"
                                width={16}
                                height={16}
                                priority
                            />
                            <span>
                                {post.totalLikes}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}