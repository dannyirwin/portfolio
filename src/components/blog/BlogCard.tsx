import React from 'react';

import { post } from '../../utilities/interfaces';

import { FaMedium } from 'react-icons/fa';
import DotsContainer from '../DotsContainer';

import config from '../../config';

interface props {
  post: post;
  index: number;
}

export default function BlogCard({ post, index }: props) {
  const getColor = (i: number) => {
    const nOfColors = config.colors.length;
    const repeats = (i - (i % nOfColors)) / nOfColors;
    const index = i - repeats * nOfColors;
    return config.colors[index];
  };

  return (
    <div className='BlogCard'>
      <a href={post?.url} target='_blank' rel='noreferrer'>
        <DotsContainer color={getColor(index)} numberOfDots={3} />
        <div className='blog-card-content'>
          <h3>{post.title}</h3>
          {post?.description && <p>{post.description}</p>}
        </div>
        <div className='blog-card-source'>
          {/* {post.icon} */}
          <FaMedium /> {/* //TODO: un-hard code this */}
          <p>{post?.source}</p>
        </div>
      </a>
    </div>
  );
}
