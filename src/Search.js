import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI';
import Book from './Book.js';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

class Search extends Component{

  searchQuery = async e => {
    try{
     var query = e.target.value
      // query = query.trim()
      this.setState({query})
      const result = await BooksAPI.search(query);
      this.setState({found:result})

    }
    catch(error)
    {
      console.log("ERROR :" , error)
    }
  }
  state = {
      query: "",
      found: []
    } 

  render(){ 
      
        return ( 
            <div className="search-books">
            <div className="search-books-bar">
            <Link to='/'><button className="close-search" ></button></Link>
              <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.searchQuery}
            />
              </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">
               {this.state.found && this.state.found.length && this.state.found.map(book => {
                    return (
                     <li key= {book.id}>
                 <div className="book">
                   <div className="book-top">
                     <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail:""})` }}></div>
                     <div className="book-shelf-changer">
                       <select value ={book.shelf} onChange = {e=> this.props.changeShelf(book, e.target.value)}>
                         <option value="move" disabled>Move to...</option>
                         <option default value="choose">Choose a shelf for the book</option>
                         <option value="currentlyReading">Currently Reading</option>
                         <option value="wantToRead">Want to Read</option>
                         <option value="read">Read</option>
                         <option value="none">None</option>
                       </select>
                     </div>
                   </div>
                   <div className="book-title">{book.title}</div>
                   <div className="book-authors">{book.authors}</div>
                 </div>
               </li>
                 ) })}
          </ol>            </div>
          </div>
            )
    }
}
export default Search