import React from 'react';
import {Link} from 'react-router-dom';

const bookTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.author.name} {props.term.author.surname}</td>
            <td>{props.term.availableCopies}</td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger my-1"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2 my-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/books/edit/${props.term.id}`}>
                    Edit
                </Link>
                <Link className={"btn btn-outline-dark ml-2 my-1"}
                      onClick={() => props.onBorrow(props.term.id)}>
                    Mark as Taken
                </Link>
            </td>
        </tr>
    )
}

export default bookTerm;
