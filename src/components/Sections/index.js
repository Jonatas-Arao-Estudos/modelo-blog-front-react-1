import React from 'react';

import { HorizontalCard } from '../Cards'
import { PopularPostsSectionTitle } from './styles';

export function PopularPostsSection({ posts }) {
  return (
    <>
        <PopularPostsSectionTitle to="s">Populares</PopularPostsSectionTitle>
        {posts.map(post => (
            <HorizontalCard key={post.id} to={post.url} imgSrc={post.imgSrc} page={post.page} title={post.title} description={post.description} />
        ))}
    </>
  );
}