import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BookshelfBooks from './BookshelfBooks'

class BookShelf extends Component {

    static propTypes = {
        onChangeShelf: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired
    }

    render(){

        const { title, books, onChangeShelf } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <BookshelfBooks 
                        books={books} 
                        onChangeShelf={onChangeShelf} 
                    />
                </div>
            </div>
        );
    }
}

export default BookShelf;