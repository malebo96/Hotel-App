import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { Nav, NavDropdown, Container, Button } from "react-bootstrap";
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <h1>GLENROSE HOTEL</h1>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/location">Location</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/bookings">Bookings</Link>
            </li>
            <li>     
            <AmplifySignOut/>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
