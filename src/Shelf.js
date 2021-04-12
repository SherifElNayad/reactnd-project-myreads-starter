import React, { Component } from 'react'
import Book from './Book.js'
import { Route, Link } from 'react-router-dom';
import Search from './Search.js'

class Shelf extends Component{
    render(){
        const allBooks = this.props.allBooks;
        console.log("HERE : ", allBooks);
        const currentlyReading = allBooks.filter(book => book.shelf === "currentlyReading")
        const wantToRead = allBooks.filter(book => book.shelf === "wantToRead")
        const read = allBooks.filter(book => book.shelf === "read")

    return ( 
    <div className="list-books-content"> 
         <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
        <div>
        <Book books={currentlyReading} title={"Currently Reading"} changeShelf = {this.props.changeShelf}/>
        <Book books={wantToRead}title= {"Want To Read"} changeShelf = {this.props.changeShelf}/>
        <Book books={read} title= {"Read"} changeShelf = {this.props.changeShelf} />
        </div>
        <div className="open-search">
          <Link to='/Search'>Open Search</Link>
        </div></div>
        )
    }
}
export default Shelf