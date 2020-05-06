import React, { useEffect, useState } from "react";
import { AuthorDisplay } from "./AuthorDisplay";

export default function Authors(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://localhost:5001/api/books")
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

        return (
            <div className="Books">
                <div className="lander">
                    <AuthorDisplay authors={this.state.authors} />
                </div>
            </div>
    );
}
