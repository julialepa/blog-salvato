import React, { Component } from "react";
import { Nav, NavItem, NavbarToggler, Navbar } from 'reactstrap'
import './footer.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




class Footer extends Component {

    render() {
        return (
            <div className="sidebar">
                <Navbar light expand="md">
                    <NavbarToggler />
                    <Nav className="right-bar ml-auto footer-container" navbar>
                        <NavItem>
                            <Link to="/company/" className="my-a">Company</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/news/" className="my-a">News</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contacts/" className="my-a">Contacts</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/userdetail/" className="my-a">UserDetail</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/posts/" className="my-a">Post</Link>
                        </NavItem>
                        <NavItem>
                            <i className="fab fa-instagram my-icon"></i>
                        </NavItem>
                        <NavItem>
                            <i className="fab fa-twitter-square my-icon"></i>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>

        );
    }
}

export default Footer;
