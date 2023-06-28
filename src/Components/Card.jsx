import React, { useReducer, useEffect } from 'react';
import { Card as MUICard, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

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

  const StyledLogo = styled('img')({
    width: '200px',
  });

  return (
    <MUICard style={{ maxWidth: '200px' }}>
      <Link to={`/dentist/${id}`} className="link">
        <StyledLogo src="./images/doctor.jpg" alt="DH-logo" />
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h6">{username}</Typography>
      </Link>
      <Button onClick={handleFavoriteToggle} variant="contained">
        {state.isFavorite ? (
          <span role="img" aria-label="star">
            ⭐️
          </span>
        ) : (
          <span role="img" aria-label="star">
            ☆
          </span>
        )}
        {state.isFavorite ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
      </Button>
    </MUICard>
  );
};

export default Card;
