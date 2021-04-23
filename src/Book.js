import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BookshelfChanger from './BookshelfChanger'

class Book extends Component {

    static propTypes = {
        onChangeShelf: PropTypes.func.isRequired,
        bookId: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired,
        shelf: PropTypes.string
    }

    render() {

        const { title, authors, thumbnail, bookId, shelf, onChangeShelf } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }}></div>
                    <BookshelfChanger 
                        bookId={bookId} 
                        onChangeShelf={onChangeShelf} 
                        shelf={shelf}
                    />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors.join(', ')}</div>
            </div>
        );
    }
}

export default Book;