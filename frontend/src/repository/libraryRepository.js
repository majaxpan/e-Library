import axios from "../custom-axios/axios";

const LibraryService = {
    fetchBooks : () => {
        return axios.get("/books");
    }
}

export default LibraryService;