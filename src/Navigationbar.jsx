import React from "react";
// import { Link } from 'react-router-dom';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

function Navigationbar() {
    return (
        <Navbar bg="dark" variant="dark" style={{marginBottom: '20px'}}>
            <Container>
                <Navbar.Brand href="/home">Recipe</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/ListoCopy">Recipe</Nav.Link>
                    <Nav.Link href="/Listo">List-Recipe</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );
}

export default Navigationbar;