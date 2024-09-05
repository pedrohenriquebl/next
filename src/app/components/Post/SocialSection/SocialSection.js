"use client";

import { useState } from 'react';
import styles from './socialSection.module.css';
import Image from 'next/image';

export default function SocialSection({ tags, socialMedia, likes }) {
    const [likeCount, setLikeCount] = useState(likes);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        (liked) ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
        setLiked(!liked);
    }

    return (
        <div className={styles.socialWrapper}>
            <div className={styles.tagWrappers}>
                <ul>
                    <li>
                        <span>Tags: </span>
                    </li>
                    {tags.map((tag, index) => (
                        <li key={index}>
                            <span>{tag}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.iconsWrapper}>
                <ul>
                    {Object.entries(socialMedia).map(([mediaKey, media], index) => (
                        <li key={index}>
                            {mediaKey === 'like' ? (
                                <span
                                    className={liked ? styles.liked : styles.notLiked}
                                    onClick={handleLike}
                                >
                                    <Image
                                        src={liked ? "icons/white-like.svg" : "icons/social/like.svg"}
                                        alt={media.src.split('/').pop().split('.').shift()}
                                        width={19}
                                        height={19}
                                        loading={"lazy"}
                                    />
                                    {likeCount}
                                </span>
                            ) : (
                                <a href={media.href} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={media.src}
                                        alt={media.src.split('/').pop().split('.').shift()}
                                        width={19}
                                        height={19}
                                        loading={"lazy"}
                                    />
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}