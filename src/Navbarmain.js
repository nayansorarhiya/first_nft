import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from './assets/images/logo.svg';
import twitterlogo from './assets/images/twitter.svg';
import discordlogo from './assets/images/discord.svg';
import instagramlogo from './assets/images/instagram.svg';
import polygonlogo from './assets/images/polygonscan.svg';


function Navbarmain() {
    return (<>
        <Navbar expand="lg">
            <Container className="mt-3">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="nav-text">
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="BkImage" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="text-light ">about</Nav.Link>
                        <Nav.Link href="#link" className="text-light ">Matketplace</Nav.Link>
                    </Nav>
                    <div className="d-flex">
                        <a href="#twitter">
                            <img src={twitterlogo} alt="ticon" />
                        </a>
                        <a href="#discord">
                            <img src={discordlogo} alt="dicon" />
                        </a>
                        <a href="#instagram">
                            <img src={instagramlogo} alt="instaicon"/>
                        </a>
                        <a href="#polygon">
                            <img src={polygonlogo}  alt="picon"/>
                        </a>
                    </div>
                </Navbar.Collapse>

            </Container>
        </Navbar>

    </>);
}

export default Navbarmain;