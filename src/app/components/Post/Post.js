import styles from './post.module.css';
import PostDetails from './PostDetails/PostDetails'
import PostText from './PostText/PostText'
import Quote from './Quote/Quote'
import PostList from './PostList/PostList'
import Banner from './Banner/Banner'
import BookList from './BookList/BookList'
import PostCard from './PostCard/PostCard';
import SocialSection from './SocialSection/SocialSection';

const postData = {
    title: 'por onde começar',
    readingTime: 7,
    date: '01/SETEMBRO/2024',
    likes: 37,
    tags: [
        'vendas', 'aplicativo', 'legislação'
    ],
    text: {
        paragraph1: `Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem 
        sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os 
        embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como 
        também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.`,
        paragraph2: `Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e 
        vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os 
        embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como 
        também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.`
    },
    quote: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore 
    magna aliqua dollor sit amet aint.`,
    list: {
        paragraph1: `Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem 
        sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou 
        para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos.`,
        topics: [
            'Dollor sit amet abin coin said upper;',
            'Aint no sunfiun weri gasty non;',
            'Dollor sit amet abin coin said upper;',
            'Aint no sunfiun weri gasty non;',
            'Dollor sit amet abin coin said upper;',
            'Aint no sunfiun weri gasty non;'
        ]
    },
    src: "images/banner_post.png",
    imageDescription: `Mini-quadros feitos à mão`,
    imageSource: `Fonte: New York Times`
};

const potterData = {
    headTitle: `Aint oupt sain crays`,
    headText: (
        <>
            Lorem Ipsum é simplesmente uma <a href="#">simulação de link</a> da indústria tipográfica e de impressos,
            e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os
            embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos. Lorem
            Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado
            desde o século XVI.
        </>
    ),
    bottomTitle: `Ipsum dollor amet`,
    bottomText: `Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo 
        utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para 
        fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos.`
}

const posts = [
    {
        image: 'images/author.svg',
        title: 'DESIGN BETTER. FASTER. TOGETHER.',
        text: `Lorem Ipsum é simplesmente uma pequena simulação de texto da indústria tipográfica e de impressos, e vem 
        sendo utilizada desde o século XVII amet dollor aint.`,
        date: '01/setembro/2024',
        readingTime: 7,
        totalLikes: 37
    },
    {
        image: 'images/author.svg',
        title: 'DESIGN BETTER. FASTER. TOGETHER.',
        text: `Lorem Ipsum é simplesmente uma pequena simulação de texto da indústria tipográfica e de impressos, e vem 
        sendo utilizada desde o século XVII amet dollor aint.`,
        date: '01/setembro/2024',
        readingTime: 7,
        totalLikes: 37
    },
    {
        image: 'images/author.svg',
        title: 'DESIGN BETTER. FASTER. TOGETHER.',
        text: `Lorem Ipsum é simplesmente uma pequena simulação de texto da indústria tipográfica e de impressos, e vem 
        sendo utilizada desde o século XVII amet dollor aint.`,
        date: '01/setembro/2024',
        readingTime: 7,
        totalLikes: 37
    }
];

const socialMedia = {
    whatsapp: {
        href: '#',
        src: "icons/social/whatsapp.svg",
    },
    facebook: {
        href: '#',
        src: "icons/social/facebook.svg",
    },
    x: {
        href: '#',
        src: "icons/social/x.svg",
    },
    linkedin: {
        href: '#',
        src: "icons/social/linkedin.svg",
    },
    email: {
        href: '#',
        src: "icons/social/email.svg",
    },
    like: {
        href: '#',
        src: "icons/social/like.svg",
    }
}

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