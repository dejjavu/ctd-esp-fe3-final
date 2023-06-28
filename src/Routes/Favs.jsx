import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, [favorites]);

  const handleFavoriteRemove = (id) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };
  
  return (
    <>
      <h1>Tus dentistas favoritos...</h1>
      <div className="card-grid">
        {favorites.length === 0 ? (
          <p>No existen favoritos.</p>
        ) : (
          favorites.map((favorite) => (
            <Card
              key={favorite.id}
              name={favorite.name}
              username={favorite.username}
              id={favorite.id}
              onFavoriteRemove={handleFavoriteRemove}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Favs;
