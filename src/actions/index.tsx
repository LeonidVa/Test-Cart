
interface books {
    id: number,
    title: string,
    author: string,
    price: number,
    coverImage: string
}

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
};

const booksLoaded = (newBooks: books) => {

    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};

const booksError = (error: string) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    };
};

export const bookAddedToCart = (bookId: number) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    };
};

export const bookRemovedFromCart = (bookId: books) => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: bookId
    };
};

export const allBooksRemovedFromCart = (bookId: books) => {
    return {
        type: 'ALL_BOOKS_REMOVED_FROM_CART',
        payload: bookId
    };
};


const fetchBooks = ({bookstoreService, dispatch}: { bookstoreService: any, dispatch: any }) => () => {
  console.log(bookstoreService.getBooks())
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data: any) => dispatch(booksLoaded(data)))
        .catch((err: any) => dispatch(booksError(err)));
};

export {
    fetchBooks
};
