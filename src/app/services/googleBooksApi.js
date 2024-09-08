export const fetchBooks = async () => {
    try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=HARRY%20POTTER');
        const data = await response.json();
        return data.items.slice(0, 4).map(book => ({
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors ? book.volumeInfo.authors.join(',') : 'Desconhecido',
            cover: book.volumeInfo.imageLinks?.thumbnail
        }));
    } catch (error) {
        console.error('Erro ao buscar livros:', error);
        return [];
    }
};
