import React, { Component } from "react";
//import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App Container">
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand>
            <Link to="/">Fisher Bookstore</Link>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}