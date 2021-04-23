import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BookShelf from './BookShelf'

class BooksList extends Component {

    static propTypes = {
        onChangeShelf: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired
    }

    render() {

        const { books, onChangeShelf } = this.props;

        return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <BookShelf 
                  title="Currently Reading" 
                  books={books.filter(book => book.shelf === 'currentlyReading')} 
                  onChangeShelf={onChangeShelf}
                />
                <BookShelf 
                  title="Want to Read" 
                  books={books.filter(book => book.shelf === 'wantToRead')} 
                  onChangeShelf={onChangeShelf} 
                />
                <BookShelf 
                  title="Read" 
                  books={books.filter(book => book.shelf === 'read')} 
                  onChangeShelf={onChangeShelf} 
                />
              </div>
              <Link to="/search" className="open-search">Add a book</Link>
            </div>
        );
    }
}

export default BooksList;