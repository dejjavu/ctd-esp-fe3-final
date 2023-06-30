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

    <div>
      <h1>Información adicional.</h1>
      <h2>{dentista.name}</h2>
      <br />
      <img src="../images/doctor.jpg" alt="DH-logo" width={'150px'} />

      <h4>ID: {dentista.id}</h4>
      <h4>Usuario: {dentista.username}</h4>
      <h4>Telefono: {dentista.phone}</h4>
      <h4>Email: {dentista.email}</h4>
    </div>
  );
};

export default Detail;
