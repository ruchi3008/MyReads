import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import BookShelf from './BookShelf'

const BooksList = (props) => {
  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
         <BookShelf title="Current Reading" books={props.books.filter((book) => book.shelf==="currentlyReading")} onShelfChange={props.onShelfChange}/>
         <BookShelf title="Want to Read" books={props.books.filter((book) => book.shelf==="wantToRead")} onShelfChange={props.onShelfChange}/>
         <BookShelf title="Read" books={props.books.filter((book) => book.shelf==="read")} onShelfChange={props.onShelfChange}/>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

BooksList.propTypes = {
  books : PropTypes.array.isRequired,
  onShelfChange : PropTypes.func.isRequired
}
export default BooksList
