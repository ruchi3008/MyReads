import React from 'react'
import PropTypes from 'prop-types'

import BooksGrid from './BooksGrid'

const BookShelf = (props) => {
  return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <BooksGrid  books={props.books} onShelfChange={props.onShelfChange}/>
      </div>
      </div>
  )
}
BookShelf.propTypes = {
  books : PropTypes.array.isRequired,
  onShelfChange : PropTypes.func.isRequired,
  title : PropTypes.string.isRequired
}
export default BookShelf
