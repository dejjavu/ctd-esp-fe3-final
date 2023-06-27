import React from 'react';
import Card from '../Components/Card';
import { useContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const { state } = useContextGlobal();

  return (
    <main className="">
      <h1>Nuestro equipo...</h1>
      <div className='card-grid'>
        {state.dentista.map((item) => (
          <Card key={item.id} name={item.name} username={item.username} id={item.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
