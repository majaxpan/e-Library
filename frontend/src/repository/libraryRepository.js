import axios from "../custom-axios/axios";

const LibraryRepository = {
    fetchBooks : () => {
        return axios.get("/books");
    },
    fetchCategories : () => {
        return axios.get("/categories");
    },
    fetchAuthors : () => {
        return axios.get("/authors");
    },
    deleteBook : (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    addBook: (name, category, authorId, availableCopies) => {
        return axios.post("/books/add", {
            "name" : name,
            "category" : category,
            "authorId" : authorId,
            "availableCopies" : availableCopies
        });
    },
    editBook: (id, name, category, authorId, availableCopies) => {
        return axios.put(`/books/edit/${id}`, {
            "name" : name,
            "category" : category,
            "authorId" : authorId,
            "availableCopies" : availableCopies
        });
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`)
    },
    borrowBook: (id) => {
        return axios.put(`/books/borrow/${id}`)
    }
}

export default LibraryRepository;