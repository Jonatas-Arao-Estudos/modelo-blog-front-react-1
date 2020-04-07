import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';

import { replaceSpecialChars } from '../../functions';

import { PageTitle } from '../../components/Titles';
import { ImageCard } from '../../components/Cards';

import Default from '../../assets/img/default.jpg';

export default function Page() {
    const history = useHistory();
    const { id, page } = useParams();
    const titlePage = 'Página ' + id;
    const actualPage = replaceSpecialChars(titlePage).toLowerCase();
    
    useEffect(() => {
        if(page === undefined || page !== actualPage) {
            history.push(`${process.env.PUBLIC_URL}/p/${id}/${actualPage}`)
        }
    },[id, page, actualPage, history]);

    const [pageCard, setPageCard] = useState([]);
    useEffect(() => {
        let temp = [];
        for(let i = 1; i <= 6; i++){
        temp.push({
            id: i,
            page: titlePage,
            title: 'Título da Matéria',
            imgSrc: Default,
            url: process.env.PUBLIC_URL + '/'
        });
        }
        setPageCard(temp);
    },[titlePage]);

    const [popularPosts, setPopularPosts] = useState([])
    useEffect(() => {
        let temp = []
        for(let i = 0; i <=4; i++){
        temp.push({
            id: i,
            page: titlePage,
            title: 'Título da Matéria',
            description: 'Descrição da Matéria',
            url: process.env.PUBLIC_URL + '/',
            imgSrc: Default
        });
        }
        setPopularPosts(temp);
    },[titlePage]);

    const [latestPosts, setLatestPosts] = useState([])
    useEffect(() => {
        let temp = []
        for(let i = 0; i <=6; i++){
        temp.push({
            id: i,
            page: titlePage,
            title: 'Título da Matéria',
            description: 'Descrição da Matéria',
            url: process.env.PUBLIC_URL + '/',
            imgSrc: Default
        });
        }
        setLatestPosts(temp);
    },[titlePage]);

    return(
        <>
        <Container className="mt-3">
            <PageTitle>{titlePage}</PageTitle>
            <Row>
            {pageCard.map(({id, page, title, imgSrc, url}) =>
                (<Col key={id} lg={4} md={6} xs={12} className="mt-3">
                <ImageCard to={url} imgSrc={imgSrc} title={title}/>
                </Col>)
            )}
            </Row>
        </Container>
        </>
    )
}