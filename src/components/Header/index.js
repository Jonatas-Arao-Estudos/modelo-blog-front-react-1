import React from 'react';
import { Container, Navbar, Nav, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'

import { NavbarStyled, NavLinkStyled, SearchStyled, FormControlSearch } from './styles';

export default function Header({ logo, blogName, pages }) {
  return (
    <NavbarStyled variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" > <img src={logo} alt={blogName} height="40px"/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarText" />
            <Navbar.Collapse id="navbarText">
              <Search mobile />
              <Nav as="ul" className="ml-auto px-3">
                {pages.map(page => (
                  <li  key={page.id}>
                    <NavLinkStyled as={Link} to={page.url} className="px-3 py-2">{page.name}</NavLinkStyled>
                  </li>
                ))}
              </Nav>
              <Search desktop />
            </Navbar.Collapse>
        </Container>
    </NavbarStyled>
  );
  
  function Search({ desktop , mobile }){
    if (mobile){
      return(
        <SearchStyled inline className="px-1 d-lg-none d-inline">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text className="search-itens rounded-0 border-right-0">
                <FaSearch/> 
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControlSearch
              className="search-itens rounded-0 border-left-0"
              type="search"
              placeholder="BUSCAR"
              aria-label="BUSCAR"
            />
          </InputGroup>
        </SearchStyled>
      );
    }
    if(desktop){
      return(
        <SearchStyled inline className="px-1 d-none d-lg-block">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text className="search-itens rounded-0 border-right-0">
                <FaSearch/> 
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControlSearch
              className="search-itens rounded-0 border-left-0"
              type="search"
              placeholder="BUSCAR"
              aria-label="BUSCAR"
            />
          </InputGroup>
        </SearchStyled>
      );
    }
  }
}