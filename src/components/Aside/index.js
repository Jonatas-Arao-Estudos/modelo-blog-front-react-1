import React from 'react';
import { Card, ListGroup, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { TransparentCard } from '../Cards';
import { LatestPostsTitle, PopularPostsTitle } from '../Titles';

import { LatestPostsAsideButton, LatestPostsAsideCard } from './styles';

export function LatestPostsAside({ posts }){
    return (
        <LatestPostsAsideCard>
            <Card.Header>
                <LatestPostsTitle to={process.env.PUBLIC_URL + '/latestposts'}>Últimos</LatestPostsTitle>
            </Card.Header>
            <Card.Body>
            <Row>
                <Col xs={11} className="mx-auto">
                    <ListGroup variant="flush">
                        {posts.map(({id, url, title, description}) => (
                            <ListGroup.Item key={id} className="px-0">
                            <Link to={url} className="stretched-link"></Link>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                            </ListGroup.Item>
                        ))}
                        <LatestPostsAsideButton to={process.env.PUBLIC_URL + '/latestposts'} className="btn btn-outline-primary mx-auto rounded-pill my-3">Ler Mais</LatestPostsAsideButton>
                    </ListGroup>
                </Col>
            </Row>
            </Card.Body>
        </LatestPostsAsideCard>
    )
}

export function PopularPostsAside({ posts }){
    return (
        <>
        <PopularPostsTitle to={process.env.PUBLIC_URL + '/popularposts'}>Populares</PopularPostsTitle>
        {posts.map(({id, url, imgSrc, page, title, description}) => (
            <TransparentCard key={id} to={url} imgSrc={imgSrc} title={title} />
        ))}
        </>
    )
}

export function LatestPostsTransparentAside({ posts }){
    return (
        <>
        <LatestPostsTitle to={process.env.PUBLIC_URL + '/latestposts'}>Últimos</LatestPostsTitle>
        {posts.map(({id, url, imgSrc, page, title, description}) => (
            <TransparentCard key={id} to={url} imgSrc={imgSrc} title={title} />
        ))}
        </>
    )
}