import styles from './post.module.css';
import PostDetails from './PostDetails'
import PostText from './PostText'

const postData = {
    title: 'por onde começar',
    readingTime: 7,
    date: '01/SETEMBRO/2024',
    text: {
        paragraph1: `Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem 
        sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os 
        embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como 
        também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na 
        década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente 
        quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.`,
        paragraph2: `Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e 
        vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os 
        embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como 
        também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.`
    }
}

export default function Post() {
    return (
        <article>
            <PostDetails {...postData} />
            <PostText text={postData.text} />
        </article>
    )
}