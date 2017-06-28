import React, { Component } from 'react';
import '../css/Nav.css';
import * as rb from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
        <rb.Navbar>
            <rb.Navbar.Header>
            <rb.Navbar.Brand>
                <Link to="/">FM Blog</Link>
            </rb.Navbar.Brand>
            <rb.Navbar.Toggle />
            </rb.Navbar.Header>
            <rb.Navbar.Collapse>
            <rb.Nav>
                <rb.NavItem eventKey={1}><Link to="/login">Login</Link></rb.NavItem>
            </rb.Nav>
            </rb.Navbar.Collapse>
        </rb.Navbar>
    );
  }
}

export default Nav;