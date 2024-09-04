import styles from './post.module.css';
import PostDetails from './PostDetails'
import PostText from './PostText'
import Quote from './Quote'
import PostList from './PostList'
import Banner from './Banner'
import BookList from './BookList'

const postData = {
    title: 'por onde começar',
    readingTime: 7,
    date: '01/SETEMBRO/2024',
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

export default function Post() {
    return (
        <article className={styles.articleWrapper}>
            <PostDetails {...postData} />
            <PostText text={postData.text} />
            <Quote quote={postData.quote} />
            <PostList list={postData.list} />
            <Banner src={postData.src} description={postData.imageDescription} source={postData.imageSource} />
            <BookList />
        </article>
    )
}