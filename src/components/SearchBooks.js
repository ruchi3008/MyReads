import React, { Component } from 'react'
import BooksList from './BooksList'
import * as BooksAPI from './../BooksAPI'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBooks extends Component{
  state = {
    query:"",
    searchedBooks:[]
  }

  updateQuery = (query) => {
    this.setState({query})
    BooksAPI.search(query.trim(),20).then((books) => {
      if(books === undefined)
         books=[]
      let shelfBooks = this.props.books
      for(let i=0;i<books.length;i++){
        books[i].shelf = 'none'
        for(let j=0;j<shelfBooks.length;j++){
          if(shelfBooks[j].id===books[i].id){
            books[i].shelf = shelfBooks[j].shelf
            continue
          }
        }
      }
      this.setState({
        searchedBooks:books
      })
    })
  }
  render(){

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(e)=>this.updateQuery(e.target.value)}/>

          </div>
        </div>
        <div className="search-books-results">
          <BooksList books={this.state.searchedBooks} onShelfChange={(book,newShelf)=>this.props.onShelfChange(book,newShelf)}/>
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}
SearchBooks.propTypes = {
  books : PropTypes.array.isRequired,
  onShelfChange : PropTypes.func.isRequired
}
export default SearchBooks
