import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import '../Components/utils/styles/Home.css'

const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []); 

  const handleFavoriteRemove = (id) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };
  
  return (
    <div className="centrar">
      <h1>Tus dentistas favoritos...</h1>
      <div className="homeRender">
        {favorites.length === 0 ? (
          <p>No existen favoritos.</p>
        ) : (
          favorites.map(({ id, name, username }) => (
            <Card
              key={id}
              name={name}
              username={username}
              id={id}
              onFavoriteRemove={handleFavoriteRemove}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favs;
