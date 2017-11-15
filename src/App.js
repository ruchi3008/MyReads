import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import * as BooksAPI from './BooksAPI'

import SearchBooks from './components/SearchBooks'
import BooksList from './components/BooksList'
import ErrorPage from './components/ErrorPage'



class BooksApp extends React.Component {
  state = {
    books:[]
  }
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({
        books:books
      })
    })
  }

  changeShelf = (book,newShelf) => {
    const oldShelf = book.shelf;
    book.shelf = newShelf;
    if(oldShelf!==newShelf){
      BooksAPI.update(book,newShelf).then((obj)=>{
        this.setState({
          books : this.state.books.filter(b => b.id!==book.id).concat([book])
        })
    })
    }
  }
  render() {
    return (
      <div className="app">
          <Switch>
            <Route path="/search" render={()=>(
              <SearchBooks books={this.state.books} onShelfChange={this.changeShelf}/>
            )}/>
            <Route exact path="/" render={()=>(
              <BooksList books={this.state.books} onShelfChange={this.changeShelf}/>
            )}/>
            <Route component={ErrorPage}/>
          </Switch>
      </div>
    )
  }
}

export default BooksApp
