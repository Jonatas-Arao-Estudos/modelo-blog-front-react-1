import React from 'react';
import { Container, Row, Col, Badge, Form, Button } from 'react-bootstrap';

export default function Contact() {
    return(
        <Container className="mt-5 mb-3">
            <Row>
                <Col lg={8} xs={12}>
                    <div className="bg-white shadow p-4">
                        <h1>Contato</h1>
                        <p><Badge variant="secondary">*</Badge> Campos obrigatórios</p>
                        <Form className="mt-4">
                            <Form.Group controlId="name">
                                <Form.Label><b>Nome</b></Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label><b>Email</b> <Badge variant="secondary">*</Badge></Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                            <Form.Group controlId="message">
                                <Form.Label><b>Mensagem</b> <Badge variant="secondary">*</Badge></Form.Label>
                                <Form.Control as="textarea" rows="5" />
                            </Form.Group>
                            <Form.Row>
                                <Button type="submit" variant="secondary" className="mx-auto rounded-pill">Enviar</Button>
                            </Form.Row>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}