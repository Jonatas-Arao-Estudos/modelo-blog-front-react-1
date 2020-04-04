import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

export const NavbarStyled = styled(Navbar)`
  background: linear-gradient(to left,#607d8b 0%,#263238 100%);
`;

export const NavLinkStyled = styled(Nav.Link)`
    color: white!important;
    border-bottom: thin solid #FF000000;
    &: hover {
        border-bottom: thin solid white;
        text-decoration: none;
    }
`;

export const SearchStyled = styled(Form)`
  .search-itens{
    background-color: #FF000000;
    color: white;
    box-shadow: none;
  }

  .search-itens:focus{
    background-color: white;
  }

  .search-itens::placeholder {
    color: white;
  }
  .search-itens:focus::placeholder{
    color: grey;
  }
`;

export const FormControlSearch = styled(FormControl)`
  ${SearchStyled} &{
    transition: all .3s ease-in-out;
    width: 10vw;
  }
  ${SearchStyled} &:focus{
    transition: all .3s ease-in-out;
    width: 13vw;
`;