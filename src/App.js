import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App Container">
        <Navbar bg="light" expand="lg">
          <Navbar.brand>
            <Link to="/">Fisher Bookstore</Link>
          </Navbar.brand>
        </Navbar>
        <Routes />
      </div>
    );
  }
}