import React, { useState } from 'react';
import './Card3.css';

const Card3 = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
    // Check if the book already exists in favorites
    const isBookInFavorites = favorites.some(
      (favorite) =>
        favorite.bname === props.bname && favorite.name === props.name
    );
  
    if (isBookInFavorites) {
      alert('Book already exists in favorites');
      return;
    }
  
    // Update the state to indicate that the card is a favorite
    setIsFavorite(false);
  
    // Add the card to the favorites list in local storage
    const updatedFavorites = [
      ...favorites,
      {
        image: props.image,
        bname: props.bname,
        name: props.name,
        down: props.down,
      },
    ];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };
  

  return (
    <div className="camain">
      <img src={props.image} alt="" />
      <span>{props.bname}</span>
      <span>{props.name}</span>
      <div className="disda">
        <a href={props.down} download>
          <div className="down">Download</div>
        </a>
        {!isFavorite && (
          <div className="add" onClick={handleAddToFavorite}>
            Add to Fav
          </div>
        )}
      </div>
      <a href={props.down} target='-blank'>
          <div className="down rad">Read Book</div>
        </a>
    </div>
  );
};

export default Card3;
