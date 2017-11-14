import React,{ Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
class BooksList extends Component{
  render(){
    return (

          <ol className="books-grid">
            {this.props.books.map((book) =>(
              <li key={book.id}>
                <Book bookDetails={book} onShelfChange={(book,newShelf) => this.props.onShelfChange(book,newShelf)}/>
              </li>
            ))
            }
          </ol>

    )
  }
}
BooksList.propTypes = {
  books : PropTypes.array.isRequired,
  onShelfChange : PropTypes.func.isRequired
}
export default BooksList
