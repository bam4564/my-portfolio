import React from 'react';
import './index.scss';

const PortfolioItem = ({ cover, title, description, url }) => {
  return (
    <div className='image-box'>
      <img src={cover} alt='portfolio' className='portfolio-image' />
      <div className='content'>
        <p className='title'>{title}</p>
        <h4 className='description'>{description}</h4>
        <button className='btn' onClick={() => window.open(url)}>
          View
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;