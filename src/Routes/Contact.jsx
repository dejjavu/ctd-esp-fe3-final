import React from 'react';
import Form from '../Components/Form';
import { Typography, Grid } from '@mui/material';

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Necesitas comunicarte?
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        Completá el formulario.
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Form />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
