import React from 'react';
import './FeedPhoto.scss';

export function FeedPhoto({ src, alt, onClick }) {
  return (
    <div className="feed-photo" onClick={onClick}>
      <img src={src} alt={alt} />
    </div>
  );
}