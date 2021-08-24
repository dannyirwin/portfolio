import React from 'react';

import { posts } from '../../content/posts';
import BlogCard from './BlogCard';

export default function BlogCardsContainer() {
  const showPosts = () => {
    return posts.map((post, i) => {
      return <BlogCard post={post} key={i} index={i} />;
    });
  };

  return <div>{showPosts()}</div>;
}
