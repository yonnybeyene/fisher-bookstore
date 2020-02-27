import React from "react";
import { Card, Button } from "react-bootstrap";

export function AuthorCard(props) {
    return (
        <Card style={{ width: "16em" }}>
            <Card.Img variant="bottom" src="https://via.placeholder.com/150" />
            <Card.body>
                <Card.Text>Author: {props.book.title}</Card.Text>
                <Card.Title>{props.book.author}</Card.Title>
                <Button variant="warning">Add to Cart</Button>
            </Card.body>
        </Card>
    );
}