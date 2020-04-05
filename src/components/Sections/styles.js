import {  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PopularPostsSectionTitle = styled(Link)`
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: bolder;
    color: #424242;
    text-decoration: underline;

    &:hover{
        transition: all .3s ease-in-out;
        color: #546e7a;
    }
`