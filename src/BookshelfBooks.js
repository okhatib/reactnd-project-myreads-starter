import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Book from './Book'

class BookshelfBooks extends Component {

    static propTypes = {
        onChangeShelf: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired
    }

    render() {

        const { books, onChangeShelf } = this.props;

        return (
            <ol className="books-grid">
                {
                    books.map(book => (
                        <li key={book.id}>
                            <Book 
                                book={book}
                                onChangeShelf={onChangeShelf}
                            />
                        </li>
                    ))
                }
            </ol>
        );
    }
}

export default BookshelfBooks;