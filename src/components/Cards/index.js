import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { ImageCardStyled, HorizontalCardStyled, HorizontalCardPage } from './styles';

export function ImageCard({ imgSrc, to, page, title }) {

  let PageElement;
  if(page){
    PageElement = <ImageCardStyled.Title>{page}</ImageCardStyled.Title> ;
  }

  let TitleElement;
  if(title){
    TitleElement = 
    <div>
      <ImageCardStyled.Text>{title}</ImageCardStyled.Text>
    </div>;
  }

  return (
    <ImageCardStyled className="border-0 shadow text-white overflow-hidden">
        <ImageCardStyled.Img src={imgSrc} alt={title} />
        <ImageCardStyled.ImgOverlay className="h-100 d-flex flex-column justify-content-end">
            {PageElement}
            {TitleElement}
          <Link to={to} className="stretched-link"></Link>
        </ImageCardStyled.ImgOverlay>
    </ImageCardStyled>
  );
}

export function HorizontalCard({ imgSrc, to, title, description, page }){

  return (
    <HorizontalCardStyled className="border-0 rounded-0 shadow my-3">
      <Row className="no-gutters">
        <Col md={4} className="overflow-hidden">
          <HorizontalCardStyled.Img className="rounded-0" src={imgSrc} alt={title}/>
        </Col>
        <Col md={8}>
          <HorizontalCardStyled.Body>
            <HorizontalCardPage>{page}</HorizontalCardPage>
            <div className="pt-2">
              <HorizontalCardStyled.Title>{title}</HorizontalCardStyled.Title>
              <HorizontalCardStyled.Text>
                {description}
              </HorizontalCardStyled.Text>
            </div>
          </HorizontalCardStyled.Body>
        </Col>
        <Link to={to} className="stretched-link"></Link>
      </Row>
    </HorizontalCardStyled>
  )
}