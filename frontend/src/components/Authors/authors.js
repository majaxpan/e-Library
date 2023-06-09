import React from "react";

const authors = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <h1 className={"text-center"}>Authors</h1><br/>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Id</th>
                            <th scope={"col"}>Full name</th>
                            <th scope={"col"}>Country</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.authors.map((term) => {
                            return (
                                <tr>
                                    <td>{term.id}</td>
                                    <td>{term.name} {term.surname}</td>
                                    <td>{term.country.name + ", " + term.country.continent}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}


export default authors;