import React from 'react';
import Card from '../Components/Card';
import { useContextGlobal } from '../Components/utils/global.context';
import '../Components/utils/styles/Home.css'
const Home = () => {
  const { state } = useContextGlobal();

  return (
    <main className='Home'>
      <h1>Nuestro equipo...</h1>
<div className='CardsContainer' >
      {state.dentista.map((item) => (
        <Card key={item.id} id={item.id} name={item.name} username={item.username} />
      ))}
      </div>
    </main>
  );
};

export default Home;
