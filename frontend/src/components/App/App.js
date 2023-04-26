import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Books from "../Books/BookList/books";
import BookAdd from "../Books/BookAdd/bookAdd"
import BookEdit from "../Books/BookEdit/bookEdit";
import Header from "../Header/header"
import Categories from "../Categories/categories"
import Authors from "../Authors/authors"
import LibraryRepository from "../../repository/libraryRepository";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            categories: [],
            authors: [],
            selectedBook: {}
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <Routes>
                        <Route path="/categories" element={
                            <Categories categories={this.state.categories}/>} />
                        <Route path="/authors" element={
                            <Authors authors={this.state.authors}/>} />
                        <Route path="/books/add" element={
                            <BookAdd categories={this.state.categories}
                                     authors={this.state.authors}
                                     onAddBook={this.addBook}/>} />
                        <Route path="/books/edit/:id" element={
                            <BookEdit categories={this.state.categories}
                                      authors={this.state.authors}
                                      onEditBook={this.editBook}
                                      book={this.state.selectedBook}/>} />
                        <Route path="/books" element={
                            <Books books={this.state.books}
                                   onDelete={this.deleteBook}
                                   onEdit={this.getBook}
                                   onBorrow={this.borrowBook}/>} />
                        <Route path="/" element={
                            <Books books={this.state.books}
                                   onDelete={this.deleteBook}
                                   onEdit={this.getBook}
                                   onBorrow={this.borrowBook}/>} />
                    </Routes>
                </main>
            </Router>
        );
    }

    loadBooks = () => {
        LibraryRepository.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }

    loadCategories = () => {
        LibraryRepository.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }

    loadAuthors = () => {
        LibraryRepository.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }

    deleteBook = (id) => {
        LibraryRepository.deleteBook(id)
            .then(() => {
                this.loadBooks();
            })
    }

    addBook = (name, category, author, availableCopies) => {
        LibraryRepository.addBook(name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            })
    }

    getBook = (id) => {
        LibraryRepository.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }

    editBook = (id, name, category, author, availableCopies) => {
        LibraryRepository.editBook(id, name, category, author, availableCopies)
            .then(() => {
                this.loadBooks()
            })
    }

    borrowBook = (id) => {
        LibraryRepository.borrowBook(id)
            .then(() => {
                this.loadBooks();
            })
    }

    componentDidMount() {
        this.loadBooks();
        this.loadCategories();
        this.loadAuthors();
    }
}

export default App;
