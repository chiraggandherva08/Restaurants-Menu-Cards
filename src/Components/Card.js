import React, { useState } from 'react';
import './Card.css';

const Card = ( {number, name, price, disc, category, imageSrc} ) => {
  return (
    <div className='card'>

      <div className="card-info" style={imageSrc}>
        <div className="card-number"> {number} </div>
        <h3 className='card-name'> {name} </h3>
        <p className='card-price'> {price} </p>
      </div>

      <div className="card-disc">
        <p className='disc'> {disc} </p>
        <p className='card-category'>{category}</p>
      </div>

    </div>
  )
}

export default Card;
