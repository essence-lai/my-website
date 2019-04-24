import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown, Form, FormControl, Button,Image} from 'react-bootstrap';
import "./styles.css"



export default class navBar extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <Navbar default >
                <Navbar.Brand href="/">
                    <Image className={"main-logo"} src={"../assets/logo.png"}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        {(this.props.route === 'home') &&
                            <Nav.Link className href={'/contact'}>
                                Let's Chat!
                            </Nav.Link>
                        }
                        {(this.props.route === 'contact') &&
                            <Nav.Link href={'/'}>
                                Return home
                            </Nav.Link>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}
