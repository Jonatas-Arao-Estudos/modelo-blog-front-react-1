import React from 'react';

import { HorizontalCard } from '../Cards'
import { PopularSectionTitle } from './styles';

export function PopularSection({ posts }) {
  return (
    <>
        <PopularSectionTitle to="s">Populares</PopularSectionTitle>
        {posts.map(post => (
            <HorizontalCard key={post.id} to={post.url} imgSrc={post.imgSrc} page={post.page} title={post.title} description={post.description} />
        ))}
    </>
  );
}