import React, { Component } from "react";
import "./Authors.css";
import { AuthorDisplay } from "./AuthorDisplay";

export default class Authors extends Component() {
    
    constructor(props) {
        super(props);
        this.state = {
         authors: [
            {
            id: 1,
            title: "Domain Driven Design",
            author: "Eric Evans",
            isbn: "978-0321125217"
            },
            {
            id: 2,
            title: "Accelerate",
            author: "Nicole Forsgren",
            isbn: "978-1942788331"
            },
            {
            id: 3,
            title: "The Giver",
            author: "Lois Lowry",
            isbn: "978-1942788332"
            },
            {
            id: 4,
            title: "Contagious",
            author: "Jonah Berger",
            isbn: "978-1942788333"
            },
            {
            id: 5,
            title: "Hooked",
            author: "Nir Eyal",
            isbn: "978-1942788334"                
            },
            {
            id: 6,
            title: "The Alchemist",
            author: "Paulo Coehlo",
            isbn: "978-1942788335"
            },                    
            {
            id: 7,
            title: "The Spook Who Sat By The Door",
            author: "Sam Greenlee",
            isbn: "978-1942788336"
            },
            {
            id: 8,
            title: "Invisible Influence",
            author: "Jonah Berger",
            isbn: "978-1942788337"
            },
            ]
        };
        }
    render () {
    return (
        <div className="Authors">
            <div className="lander">
                <h1>Authors</h1>
                <p>Author Search</p>
                <AuthorDisplay authors={this.state.authors} />
            </div>
        </div>
    );
}
}