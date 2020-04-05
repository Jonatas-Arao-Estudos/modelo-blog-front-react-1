import React from 'react';
import { Container , Nav, Navbar, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { NavbarStyled, FooterDescription, MobileFooterCollapse } from './styles';

export default function Footer({ logo, blogName, blogDescription, pages }) {
    let FooterDescriptionElement;
    if(logo && blogDescription){
        FooterDescriptionElement = 
        <FooterDescription>
            <img src={logo} alt={blogName} height="60px"/>
            <p className="pt-4 text-white">{blogDescription}</p>
        </FooterDescription>
    }

    return (
        <footer className="mt-5">
            {FooterDescriptionElement}
            <FooterNav desktop/>
            <FooterNav mobile/>
        </footer>
    )

    function FooterNav({ desktop, mobile }){
        if(mobile){
            return (
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
            )
        }
        if(desktop){
            return (
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
            )
        }
    }
}