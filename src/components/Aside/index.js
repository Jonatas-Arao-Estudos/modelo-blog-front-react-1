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
                        {posts.map(post => (
                            <ListGroup.Item key={post.id} className="px-0">
                            <Link to={post.url} className="stretched-link"></Link>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.description}</Card.Text>
                            </ListGroup.Item>
                        ))}
                        <LatestPostsAsideButton to="/" className="btn btn-outline-primary mx-auto rounded-pill my-3">Ler Mais</LatestPostsAsideButton>
                    </ListGroup>
                </Col>
            </Row>
            </Card.Body>
        </LatestPostsAsideCard>
    )
}