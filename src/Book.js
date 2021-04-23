import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BookshelfChanger from './BookshelfChanger'

class Book extends Component {

    static propTypes = {
        onChangeShelf: PropTypes.func.isRequired,
        book: PropTypes.object.isRequired
    }

    render() {

        const { book, onChangeShelf } = this.props;
        const { title, authors, imageLinks } = book;

        return (
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={{ width: 128, height: 193, backgroundImage: `url("${imageLinks && imageLinks.thumbnail}")` }}></div>
                    <BookshelfChanger 
                        book={book} 
                        onChangeShelf={onChangeShelf}
                    />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors && authors.join(', ')}</div>
            </div>
        );
    }
}

export default Book;