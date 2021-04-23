import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'

import * as BooksAPI from './BooksAPI';

import BooksList from "./BooksList";
import BookSearch from './BookSearch'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  ChangeShelf = (bookId, newShelf) => {

    BooksAPI
      .update(bookId, newShelf)
      .then(res => {
        let books = [...this.state.books];
        const bookIndx = books.findIndex(book => book.id === bookId);
        books[bookIndx].shelf = newShelf;
        
        this.setState({ books });
      })
  }

  render() {

    const { books } = this.state;

    return (
      <div className="app">
        <Route 
          exact 
          path="/" 
          render={() => (
            <BooksList 
              books={books} 
              onChangeShelf={this.ChangeShelf}
            />
          )} 
        />
        <Route 
          path="/search" 
          component={BookSearch} 
        />
      </div>
    )
  }
}

export default BooksApp
