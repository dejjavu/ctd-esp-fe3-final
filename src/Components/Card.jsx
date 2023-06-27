import React from "react";
import { Typography, Button, Card as MuiCard, CardContent } from "@mui/material";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    const cardData = {
      id,
      name,
      username,
    };

    // Lógica para guardar la tarjeta en localStorage
    const existingFavs = localStorage.getItem("favorites");
    let favorites = existingFavs ? JSON.parse(existingFavs) : [];
    favorites.push(cardData);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <MuiCard>
      <CardContent>
        <Typography variant="h5" component="h3">
          {name}
        </Typography>
        <Typography variant="body1" component="p">
          {username}
        </Typography>
        <Typography variant="body2" component="p">
          ID: {id}
        </Typography>
        {/* Agrega aquí el enlace hacia la página de detalle */}
        <Button onClick={addFav} variant="contained" color="primary" className="favButton">
          Add fav
        </Button>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
