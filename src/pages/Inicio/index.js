import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../../components/Header';
import { ImageCard } from '../../components/Cards';
import { PopularSection } from '../../components/Sections';

import logo from '../../assets/img/Logo.png';
import Default from '../../assets/img/default.jpg';

export default function Inicio() {

  function IndexCards(){ 
    const countIndexCards = [1, 2, 3, 4, 5, 6];
    return countIndexCards.map((id) =>
    (<Col key={id} lg={4} md={6} xs={12} className="mt-3">
      <ImageCard to="#" imgSrc={Default} page="Página" title="Título da Matéria"/>
    </Col>)
  )};

  let pages = []

  for(let i = 1; i <= 4; i++){
    pages.push({
      id: i,
      name: `Página ${i}`,
      url: '/'
    });
  }

  let posts = []

  for(let i = 0; i <=4; i++){
    posts.push({
      page: 'Página',
      title: 'Título da Matéria',
      description: 'Descrição da Matéria',
      url: '',
      imgSrc: Default
    });
  }

  return (
    <>
    <Header logo={logo} blogName="Design Teste" pages={pages} />
    

    <Container className="mt-3" as="section">
      <Row>
        <IndexCards />
      </Row>
    </Container>

    <Container className="mt-5">
      <Row>
        <Col lg={8} xs={12} as="section">
          <PopularSection posts={posts}/>
        </Col>
      </Row>
    </Container>
    </>
  );
}