import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { HorizontalCard, ImageTitleCard } from '../Cards'
import { LatestPostsTitle, PopularPostsTitle } from '../Titles'

import { } from './styles';

export function PopularPostsSection({ posts }) {
  return (
    <>
        <PopularPostsTitle to={process.env.PUBLIC_URL + '/'}>Populares</PopularPostsTitle>
        {posts.map(({id, url, imgSrc, page, title, description}) => (
            <HorizontalCard key={id} to={url} imgSrc={imgSrc} page={page} title={title} description={description} />
        ))}
    </>
  );
}

export function LatestPostsSection({ posts }){
  return(
    <>
      <LatestPostsTitle to={process.env.PUBLIC_URL + '/'}>Últimos</LatestPostsTitle>
      <Row className="mt-2">
      {posts.map(({id, url, imgSrc, title, description},i) => {
        if(i < 4){
          return (
            <Col sm={6} xs={12} className="my-2">
              <ImageTitleCard key={id} to={url} imgSrc={imgSrc} title={title} description={description}></ImageTitleCard>
            </Col>
          )
        }else{
        return (
          <Col xs={12}>   
            <HorizontalCard key={id} to={url} imgSrc={imgSrc} title={title} description={description} />
          </Col>
          )
        }})}
      </Row>
    </>
  )
}