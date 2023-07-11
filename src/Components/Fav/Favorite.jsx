import React, { useState } from 'react';
import './Favorite.css'

const FavoritesList = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favoriteList, setFavoriteList] = useState(favorites);

  const removeFromFavorites = (index) => {
    const updatedFavorites = [...favoriteList];
    updatedFavorites.splice(index, 1);
    setFavoriteList(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      {/* <h2>Favorites</h2> */}
      {favoriteList.length > 0 ? (
        <div className="fmain">
          {favoriteList.map((favorite, index) => (
            <div key={index} className="famain">
              <img src={favorite.image} alt="" width={200} />
              <span>{favorite.bname}</span>
              <span>{favorite.name}</span>
              <div className="disda">
              <a href={favorite.down} download>
                <div className="down">Download</div>
              </a>
              <button className="remo" onClick={() => removeFromFavorites(index)}>
                Rem from Fav
              </button>
              </div>
              <a href={favorite.down} target='-blank'>
              <div className="down rad">Read Book</div>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="emp">No favorites selected.</div>
      )}
    </div>
  );
};

export default FavoritesList;
