import React from 'react';

import { HorizontalCard } from '../Cards'
import { PopularPostsSectionTitle } from './styles';

export function PopularPostsSection({ posts }) {
  return (
    <>
        <PopularPostsSectionTitle to="s">Populares</PopularPostsSectionTitle>
        {posts.map(({id, url, imgSrc, page, title, description}) => (
            <HorizontalCard key={id} to={url} imgSrc={imgSrc} page={page} title={title} description={description} />
        ))}
    </>
  );
}