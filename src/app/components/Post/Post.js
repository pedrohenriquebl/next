import styles from './post.module.css';

//Components
import { PostDetails, PostText, Quote, PostList, Banner, BookList, PostCard, SocialSection } from '@/app/components/index';

//Data
import { posts, postData, potterData, socialMedia } from '@/app/data/index';

export default function Post() {
    return (
        <article className={styles.articleWrapper}>
            <PostDetails {...postData} />
            <PostText text={postData.text} />
            <Quote quote={postData.quote} />
            <PostList list={postData.list} />
            <Banner src={postData.src} description={postData.imageDescription} source={postData.imageSource} />
            <BookList {...potterData}/>
            <PostCard posts={posts} orientation="horizontal" />
            <SocialSection tags={postData.tags} socialMedia={...socialMedia} likes={postData.likes}/>
            <h1 className={styles.title}>Leia também...</h1>
            <PostCard posts={posts} orientation="vertical" />
        </article>
    )
}