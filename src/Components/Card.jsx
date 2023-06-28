import React from 'react';
import { Card as MUICard, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom'

const Card = ({ name, username, id }) => {
  const addFav = () => {
    const cardData = {
      id,
      name,
      username,
    };

    const existingFavs = localStorage.getItem('favorites');
    let favorites = existingFavs ? JSON.parse(existingFavs) : [];
    
    // Verificar si el objeto ya existe en la lista
    const isAlreadyFavorite = favorites.some((favorite) => favorite.id === cardData.id);
    
    if (!isAlreadyFavorite) {
      favorites.push(cardData);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
      console.log('El objeto ya está en la lista de favoritos');
    }
    
  };

  const StyledLogo = styled('img')({
    width: '200px',
  });

  return (
    <MUICard style={{ maxWidth: '200px' }}>

      <Link to={`/dentist/${id}`} className="link">

        <StyledLogo src="./images/doctor.jpg" alt="DH-logo" />
        <Typography variant="h4" >
          {name}
        </Typography>
        <Typography variant="h6" >
          {username}
        </Typography>
      </Link>
      <Button onClick={addFav} variant="contained">
        Agregar a favoritos
      </Button>
    </MUICard>
  );
};

export default Card;
