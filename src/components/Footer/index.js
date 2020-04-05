import React from 'react';
import { Container , Nav, Navbar, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { NavbarStyled, FooterDescription, MobileFooterCollapse } from './styles';

export function FooterDescriptionElement({ logo, blogName, blogDescription }){
    return(
        <FooterDescription className="mt-5">
            <img  src={logo} alt={blogName} height="60px"/>
            <p className="pt-4 text-white">{blogDescription}</p>
        </FooterDescription>
    );
}

export function FooterNav({ pages }){
    return (
        <div className="mt-auto">
            <NavbarStyled className="d-lg-none" expand="lg" variant="dark">
                <MobileFooterCollapse id="footerNavbar">
                    <ListGroup variant="flush" className="p-4">
                        {pages.map(page => (
                            <ListGroup.Item key={page.id} as={Link} className="bg-transparent text-white text-center px-3" to={page.url}>{page.name}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </MobileFooterCollapse>
                <Nav as="ul">
                    <Nav.Item className="text-white">{new Date().getFullYear()} Ⓒ</Nav.Item>
                </Nav>
                <Navbar.Toggle aria-controls="footerNavbar" />
            </NavbarStyled>
            <NavbarStyled expand="lg" variant="dark" className="d-none d-lg-block">
                <Container>
                    <Nav as="ul">
                        {pages.map(page => (
                            <Nav.Link key={page.id} as={Link} className="px-3" to={page.url} active>{page.name}</Nav.Link>
                        ))}
                    </Nav>
                    <Nav as="ul">
                        <Nav.Item className="text-white">{new Date().getFullYear()} Ⓒ</Nav.Item>
                    </Nav>
                </Container>
            </NavbarStyled>
        </div>
    )
}