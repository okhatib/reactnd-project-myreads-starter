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

  UpdateBooks = (books) => {
    this.setState({ books })
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
        this.UpdateBooks(books);
    })
  }

  ChangeShelf = (book, shelf) => {

    BooksAPI
      .update(book, shelf)
      .then(res => {
        let books = [...this.state.books];
        const bookIndx = books.findIndex(b => b.id === book.id);

        if(bookIndx > -1) {
          books[bookIndx].shelf = shelf;
        }
        else {
          books.push({...book, shelf: shelf})
        }
        
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
          render={() => (<BookSearch onChangeShelf={this.ChangeShelf} currentBooks={this.state.books} />)} 
        />
      </div>
    )
  }
}

export default BooksApp
