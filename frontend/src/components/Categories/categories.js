import React from "react";

const categories = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <h1 className={"text-center"}>Categories</h1><br/>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead className={"text-center"}>
                        <tr>
                            <th scope={"col"}>Category names</th>
                        </tr>
                        </thead>
                        <tbody className={"text-center"}>
                        {props.categories.map((term) => {
                            return (
                                <tr>
                                    <td>{term.toString()}</td>
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


export default categories;