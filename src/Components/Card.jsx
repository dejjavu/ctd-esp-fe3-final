import React, { useReducer, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/Cards.css'



const initialState = {
  isFavorite: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        isFavorite: action.payload,
      };
    default:
      return state;
  }
};

const Card = ({ name, username, id }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const existingFavs = localStorage.getItem('favorites');
    if (existingFavs) {
      const favorites = JSON.parse(existingFavs);
      const isAlreadyFavorite = favorites.some((favorite) => favorite.id === id);
      dispatch({ type: 'SET_FAVORITE', payload: isAlreadyFavorite });
    }
  }, [id]);

  const handleFavoriteToggle = () => {
    const cardData = {
      id,
      name,
      username,
    };

    const existingFavs = localStorage.getItem('favorites');
    let favorites = existingFavs ? JSON.parse(existingFavs) : [];

    const isAlreadyFavorite = favorites.some((favorite) => favorite.id === cardData.id);

    if (!isAlreadyFavorite) {
      favorites.push(cardData);
      dispatch({ type: 'SET_FAVORITE', payload: true });
    } else {
      const updatedFavorites = favorites.filter((favorite) => favorite.id !== cardData.id);
      favorites = updatedFavorites;
      dispatch({ type: 'SET_FAVORITE', payload: false });
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

 




  return (
   
     <div className="cardContainer">
      <Link to={`/dentist/${id}`} className="link">
        <img src="./images/doctor.jpg" alt="DH-logo" width={'150px'}/>
        <h4>{name}</h4>
        <h5>{username}</h5>
      </Link>
      <p onClick={handleFavoriteToggle}>
        {state.isFavorite ? (
          <span >
            ⭐️
          </span>
        ) : (
          <span >
            ☆
          </span>
        )}

      </p>
      </div>
  );
};

export default Card;
