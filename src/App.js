import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './components/BooksList'
import SearchBooks from './components/SearchBooks'
import { Link, Route } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    currentlyReadingBooks: [],
    wantToReadBooks:[],
    readBooks:[],
    books:[]
  }
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({
        currentlyReadingBooks : books.filter((book) => book.shelf==="currentlyReading"),
        wantToReadBooks : books.filter((book) => book.shelf==="wantToRead"),
        readBooks : books.filter((book) => book.shelf==="read"),
        books:books
      })
    })
  }

  changeShelf = (book,newShelf) => {
    const oldShelf = book.shelf;
    book.shelf = newShelf;
    if(oldShelf!==newShelf){
      BooksAPI.update(book,newShelf).then((obj)=>{
    })
    BooksAPI.getAll().then((books) => {
      this.setState({
        currentlyReadingBooks : books.filter((book) => book.shelf==="currentlyReading"),
        wantToReadBooks : books.filter((book) => book.shelf==="wantToRead"),
        readBooks : books.filter((book) => book.shelf==="read"),
        books:books
      })
    })
    }
  }
  render() {
    return (
      <div className="app">
          <Route path="/search" render={()=>(
            <SearchBooks books={this.state.books} onShelfChange={this.changeShelf}/>
          )}/>

          <Route exact path="/" render={()=>(
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Current Reading</h2>
                  <div className="bookshelf-books">
                    <BooksList  books={this.state.currentlyReadingBooks} onShelfChange={this.changeShelf}/>
                  </div>
                  </div>
                  <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <BooksList  books={this.state.wantToReadBooks} onShelfChange={this.changeShelf}/>
                  </div>
                  </div>
                  <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <BooksList  books={this.state.readBooks} onShelfChange={this.changeShelf}/>
                  </div>
                  </div>
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}/>
      </div>
    )
  }
}

export default BooksApp
