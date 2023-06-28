import React from 'react';
import Card from '../Components/Card';
import { useContextGlobal } from '../Components/utils/global.context';
import { Grid } from '@mui/material';


const Home = () => {
  const { state } = useContextGlobal();


  return (
    <main>
      <h1>Nuestro equipo...</h1>
      <Grid container spacing={2}>
        { state.dentista.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card id= {item.id} name={item.name} username={item.username} />
            </Grid>
          ))}
      </Grid>
    </main>
  );
          }

export default Home;
