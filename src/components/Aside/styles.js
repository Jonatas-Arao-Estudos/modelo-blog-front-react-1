import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LatestPostsAsideButton = styled(Link)`
    border-color: #546e7a;
    color:  #546e7a;
    &:hover{
        border-color: #546e7a;
        background-color: #546e7a;
    }
`;

export const LatestPostsAsideCard = styled(Card)`
    border-style: solid;
    border-width: 4px;
    border-color: #b0bec5;  
    & .card-header{
        background-color: white;
        border: none;
    }
    & .card-header a{
        transition: all .3s ease-in-out;
        background-color: white;
        color:  #546e7a;
        text-decoration: underline;
        text-transform: uppercase;
        font-weight: bolder;
        font-size: 1.5rem;
    }
    & .card-header a:hover{
        color:  #424242;
    }
    & .card-body{
        padding: 0 0.3rem;
    }
`