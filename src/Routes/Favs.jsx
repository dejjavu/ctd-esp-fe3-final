import React from "react";
import Card from "../Components/Card";

const Favs = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

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
            />
          ))
        )}
      </div>
    </>
  );
};

export default Favs;
