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
    & .card-body{
        padding: 0 0.3rem;
    }
`