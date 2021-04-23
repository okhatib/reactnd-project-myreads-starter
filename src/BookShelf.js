import React, { Component } from 'react';

import BookshelfBooks from './BookshelfBooks'

class BookShelf extends Component {
    render(){

        const { title, books } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <BookshelfBooks books={books}/>
                </div>
            </div>
        );
    }
}

export default BookShelf;