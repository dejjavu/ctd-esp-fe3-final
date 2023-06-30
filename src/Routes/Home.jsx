import React from 'react';
import Card from '../Components/Card';
import { useContextGlobal } from '../Components/utils/global.context';
import '../Components/utils/styles/Home.css'
const Home = () => {
  const { state } = useContextGlobal();

  return (


<div className='centrar'>
<h1>Home</h1>
    <div className='homeRender'>

      {state.dentista.map((item) => (
        <Card key={item.id} id={item.id} name={item.name} username={item.username} />
      ))}
    </div>
    </div>

  );
};

export default Home;
