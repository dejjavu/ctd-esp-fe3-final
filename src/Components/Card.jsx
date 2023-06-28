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

    // Lógica para guardar la tarjeta en localStorage
    const existingFavs = localStorage.getItem('favorites');
    let favorites = existingFavs ? JSON.parse(existingFavs) : [];
    favorites.push(cardData);
    localStorage.setItem('favorites', JSON.stringify(favorites));
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
