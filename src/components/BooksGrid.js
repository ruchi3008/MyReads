import React from 'react'

import PropTypes from 'prop-types'
import Book from './Book'

const BooksGrid = (props) =>{
  return(
    <ol className="books-grid">
      {props.books.map((book) =>(
        <li key={book.id}>
          <Book book={book} onShelfChange={(book,newShelf) => props.onShelfChange(book,newShelf)}/>
        </li>
      ))}
    </ol>
  )
}
BooksGrid.propTypes = {
  books : PropTypes.array.isRequired,
  onShelfChange : PropTypes.func.isRequired
}
export default BooksGrid
