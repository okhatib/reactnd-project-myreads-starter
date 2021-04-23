import React, { Component } from 'react';

import Book from './Book'

class BookshelfBooks extends Component {
    render() {

        const { books } = this.props;

        return (
            <ol className="books-grid">
                {
                    books.map(book => <li key={book.title}><Book title={book.title} authors={book.authors} thumbnail={book.imageLinks.thumbnail} /></li>)
                }
            </ol>
        );
    }
}

export default BookshelfBooks;