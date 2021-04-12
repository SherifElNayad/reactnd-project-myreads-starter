import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf.js'
import Search from './Search.js'
import { BrowserRouter,Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
    // showSearchPage: false
  };

componentDidMount()
{
BooksAPI.getAll().then(resp => this.setState({books:resp})); 
}
changeBookShelf = (book, shelf)  => {
  const bo = this.state.books.map(nbo => {
    if (nbo.id === book.id) {
      nbo.shelf = shelf;
      console.log()
    }
    return nbo;
  });

  this.setState({
    books: bo,
  });
};

  render() {
    return (
      <BrowserRouter>       
      <div className="app">
      <Route exact path='/Search' render={()=>(
       <Search changeShelf={this.changeBookShelf}/>
      )} />      <div className="list-books"> 
      <Route exact path='/' render={()=>(
       <Shelf allBooks={this.state.books} changeShelf={this.changeBookShelf} />
      )} />
      </div>
  </div> </BrowserRouter>

    )
  }
}

export default BooksApp
