import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI';

class Book extends Component{
    render(){
    const shelfBooks = this.props.books;
return(
        <div className="list-books-content">
       
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {shelfBooks.map(book => {
                    return (
                     <li key= {book.id}>
                 <div className="book">
                   <div className="book-top">
                     <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                     <div className="book-shelf-changer">
                       <select value ={book.shelf} onChange = {e=> this.props.changeShelf(book, e.target.value)}>
                         <option value="move" disabled>Move to...</option>
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


              </ol>
            </div>
        </div>  
        </div>
        </div>
)}
}
export default Book