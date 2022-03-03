import React, { Component } from 'react';
import BookListItem from '../book-list-item';

import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.css';


interface book {
  id: number,
  title: string,
  author: string,
  price: number,
  coverImage: string
}

interface books extends Array<book>{}

const BookList = ({ books, onAddedToCart }: { books: books, onAddedToCart: React.MouseEventHandler }) => {
  return (
    <ul className="book-list">
      {
        books.map((book: any) => {
          return (
            <li key={book.id} className='book-list-item-li'>
              <BookListItem
                book={book}
                onAddedToCart={() => onAddedToCart(book.id)}/>
            </li>
          );
        })
      }
    </ul>
  );
};




class BookListContainer extends Component<any, any> {

  componentDidMount() {

    this.props.fetchBooks();
  }

  render() {

    const { books, loading, error, onAddedToCart }  = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart}/>;
  }
}


const mapStateToProps = ({ bookList: { books, loading, error }}:{bookList: any}) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch: any, { bookstoreService }: any) => {

  return {
    fetchBooks: fetchBooks({bookstoreService: bookstoreService, dispatch: dispatch}),
    onAddedToCart: (id: number) => dispatch(bookAddedToCart(id))
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
