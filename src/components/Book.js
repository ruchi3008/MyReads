import React, {Component} from 'react'
import PropTypes from 'prop-types'
class Book extends Component{

  render(){
    let book = this.props.book
    let thumbNail = ''
    if(book.imageLinks !== undefined){
         thumbNail = book.imageLinks.smallThumbnail
    }else{
         thumbNail = "http://via.placeholder.com/128x193?text=No%20Cover";
    }
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbNail})`}}></div>
          <div className="book-shelf-changer">
            <select className="selectpicker" defaultValue={book.shelf} onChange={(e) => this.props.onShelfChange(book,e.target.value)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors.join(', '):''}</div>

      </div>
    )
  }
}

Book.propTypes = {
  book : PropTypes.object.isRequired,
  onShelfChange : PropTypes.func.isRequired
}
export default Book
