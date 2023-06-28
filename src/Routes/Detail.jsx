import React from 'react';
import { useParams } from 'react-router-dom';
import { useContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { state } = useContextGlobal();
  const params = useParams();


  const dentista = state.dentista.find((item) => item.id === parseInt(params.id));

  if (!dentista) {
    return <h1>Dentista no encontrado</h1>;
  }

  return (
    <>
      <h1>Información del Dentista</h1>
      <h2>Name: {dentista.name}</h2>
      <p>Email: {dentista.email}</p>
      <p>Phone: {dentista.phone}</p>
      <p>Website: {dentista.website}</p>
    </>
  );
};

export default Detail;
