import React, { Component } from 'react';

import BookshelfChanger from './BookshelfChanger'

class Book extends Component {
    render() {

        const { title, authors, thumbnail } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }}></div>
                    <BookshelfChanger />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors.join(', ')}</div>
            </div>
        );
    }
}

export default Book;