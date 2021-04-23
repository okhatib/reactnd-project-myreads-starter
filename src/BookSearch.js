import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BookshelfBooks from './BookshelfBooks'

import * as BooksAPI from "./BooksAPI";

class BookSearch extends Component {

    state = {
        query: '',
        books: [],
        showError: false
    }

    handleChange = (e) => {

        let query = e.target.value;

        this.setState({ query });

        if(query !== '' && query.length > 2) {
            BooksAPI.search(query).then(resBooks => {

                if(resBooks.error) {
                    this.setState({
                        query: query,
                        books: [],
                        showError: true
                    });
                }
                else {
                    let books = (!resBooks.error) ? resBooks : [];

                    this.props.currentBooks.forEach(currBook => {
                        const bookIndx = books.findIndex(book => book.id === currBook.id);
                        if(bookIndx > -1) {
                            books[bookIndx].shelf = currBook.shelf;
                        }
                    });

                    this.setState({
                        query: query,
                        books,
                        showError: false
                    });
                }
            })
        }

    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input 
                            type="text" 
                            placeholder="Search by title or author" 
                            value={this.state.query}
                            onChange={this.handleChange}
                        />

                    </div>
                </div>
                
                <div className="search-books-results">
                    { (this.state.showError) && <p style={{color: 'red'}}>No results to show</p> }
                    <BookshelfBooks books={this.state.books} onChangeShelf={this.props.onChangeShelf} />
                </div>
            </div>
        );
    }
}

export default BookSearch;