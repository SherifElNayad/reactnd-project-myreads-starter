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
componentDidUpdate()
{
  BooksAPI.getAll().then(resp => this.setState({books:resp})); 
}
changeBookShelf = (book, shelf)  => {
  console.log("Called" , book.id)
  console.log(this.state.books)
  BooksAPI.update(book,shelf);
  const bo = this.state.books.map(nbo => {
    if (nbo.id === book.id) {
      nbo.shelf = shelf;
    }
    return nbo;
  });



  this.setState({
    books: bo,
  });
};


updateFoundBook = (book, shelf)  => {
  console.log(shelf)
  BooksAPI.update(book,shelf);
  let flag = 0;
  this.state.books.forEach(nbo => {
    if (nbo.id === book.id) {
      flag = 1;
      nbo.shelf = shelf
    }

  })
    if(flag === 0)
    {
      this.setState({
        books:[...this.state.books,book]
      })
      console.log([...this.state.books,book])
      // this.state.books.push(book);
    }
  ;
}

  render() {
    return (
      <BrowserRouter>       
      <div className="app">
      <Route exact path='/Search' render={()=>(
       <Search allBooks={this.state.books} changeShelf={this.updateFoundBook}/>
      )} />      <div className="list-books"> 
      <Route exact path='/' render={()=>(
       <Shelf 
       currentlyReading={this.state.books.filter(book => book.shelf === "currentlyReading")}
       read={this.state.books.filter(book => book.shelf === "read")}
       wantToRead={this.state.books.filter(book => book.shelf === "wantToRead")}
       />
      )} />
      </div>
  </div> </BrowserRouter>

    )
  }
}

export default BooksApp
