import React from "react";
//import { BookCard } from "./BookCard";
//import { CardColumns } from "react-bootstrap";

export function AuthorDisplay(props) {
    return (
        <div className="display">
            <h3>Authors</h3>
                {props.authors.map(a => (
                    <p>{a.author}</p>
                ))}
        </div>
    );
}