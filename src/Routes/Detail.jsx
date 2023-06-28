import React from 'react';
import { useParams } from 'react-router-dom';
import { useContextGlobal } from '../Components/utils/global.context';
import '../Components/utils/styles/Detail.css'

const Detail = () => {
  const { state } = useContextGlobal();
  const params = useParams();


  const dentista = state.dentista.find((item) => item.id === parseInt(params.id));

  if (!dentista) {
    return <h1>Dentista no encontrado</h1>;
  }

  return (
    <div className='detailsContainer'>
      <h1>Información del Dentista</h1>
      <div className='detailInfo'>
      <h2>{dentista.name}</h2>
      <p> {dentista.email}</p>
      <p>{dentista.phone}</p>
      <p> {dentista.website}</p>
    </div>
    </div>
  );
};

export default Detail;
