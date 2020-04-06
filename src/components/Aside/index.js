import React from 'react';
import { Card, ListGroup, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { LatestPostsAsideButton, LatestPostsAsideCard } from './styles';

export function LatestPostsAside({ posts }){
    return (
        <LatestPostsAsideCard>
            <Card.Header>
                <Link>Últimos</Link>
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
                        <LatestPostsAsideButton to={process.env.PUBLIC_URL + '/'} className="btn btn-outline-primary mx-auto rounded-pill my-3">Ler Mais</LatestPostsAsideButton>
                    </ListGroup>
                </Col>
            </Row>
            </Card.Body>
        </LatestPostsAsideCard>
    )
}