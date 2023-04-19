import React from "react";
import BookTerm from "../BookTerm/bookTerm";

const books = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <h1 className={"text-center"}>Available books</h1><br/>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Title</th>
                            <th scope={"col"}>Category</th>
                            <th scope={"col"}>Author</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.books.map((term) => {
                            return (
                                <BookTerm term={term}/>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}


export default books;