import React, { useState } from 'react';
import './Feed.scss';
import firstImage from '../assets/gym.jpg';
import secondImage from '../assets/gym2.jpg';
import thirdImage from '../assets/gym3.jpg';
import fourthImage from '../assets/gym4.jpg';
import fifthImage from '../assets/gym5.jpg';
import sixthImage from '../assets/gym6.jpg';
import { Modal } from '../Modal';
import { FeedPhotoDetail } from './FeedPhotoDetail';
import { FeedPhoto } from './FeedPhoto';

const images = [firstImage, secondImage, thirdImage, fourthImage, fifthImage, sixthImage];
const comments = [
  'comentario corto',
  'comentario mediano mediano mediano mediano mediano',
  'palabralargaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  'comentario largo largo largo largo largo largo largo largo largo largo largo largo largo largo largo largo largo largo largocomentario largo largo largo largo largo largo largo largo largo largo largo largo largo largo largo largo largo largo largo'
];

let totalImages = [];
for (let index = 0; index < 10; index++) {
  totalImages = totalImages.concat(images);
}

export function Feed() {
  const [currentImage, setCurrentImage] = useState(null);

  function openModal(src) {
    return () => setCurrentImage(src);
  }

  function onClose() {
    setCurrentImage(null);
  }

  return (
    <article className="feed">
      { totalImages.map((image, index) => <FeedPhoto key={index.toString()} src={image} onClick={openModal(image)} />)}
      <Modal show={Boolean(currentImage)} onClose={onClose}><FeedPhotoDetail src={currentImage} comments={comments.concat(comments)} /></Modal>
    </article>
  );
}
