# MyReads Project

The project is build over the starter template provided for the final assessment project for Udacity's React Fundamentals course.

## To Run

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── components # All the components used in the project
    │   ├── Book.js # Component to display a single book along with the cover photo title and author. Also has a dropdown control to change the book's shelf "Currently Reading" ,"Want to Read","Read" and "none"
    │   ├── BookGrid.js # Component to display the unordered list of books.
    │   └── BookShelf.js #Component to display the a bookshelf comprising of shelf title and BookGrid.
        └── BookList.js #Component responsible to render the booklist associated with '/' route of the app.
        └── SearchBooks.js #Component responsible to render Search functionality associated with '/search' link of the app.
        └── ErrorPage.js #Component responsible to render  "Page Not Found" in case any unknown url is hit by the user.
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
