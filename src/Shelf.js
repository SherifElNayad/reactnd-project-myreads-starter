import React, { Component } from 'react'
import Book from './Book.js'
import { Route, Link } from 'react-router-dom';
import Search from './Search.js'

class Shelf extends Component{
  
  render(){
    return ( 
    <div className="list-books-content"> 
         <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
        <div>
        <Book books={this.props.currentlyReading} title={"Currently Reading"} changeShelf = {this.props.changeShelf}/>
        <Book books={this.props.wantToRead}title= {"Want To Read"} changeShelf = {this.props.changeShelf}/>
        <Book books={this.props.read} title= {"Read"} changeShelf = {this.props.changeShelf} />
        </div>
        <div className="open-search">
          <Link to='/Search'>Open Search</Link>
        </div></div>
        )
    }
}
export default Shelf