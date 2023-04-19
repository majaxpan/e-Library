import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import Books from "../Books/BookList/books";
import Header from "../Header/header"
import LibraryService from "../../repository/libraryRepository";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <Routes>
                        <Route path="/books" element={<Books books={this.state.books}/>} />
                        <Route path="/" element={<Navigate replace to="/books" />} />
                    </Routes>
                </main>
            </Router>
        );
    }

    loadBooks = () => {
        LibraryService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }

    componentDidMount() {
        this.loadBooks();
    }
}

export default App;
