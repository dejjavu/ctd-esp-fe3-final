import React from 'react';
import Form from '../Components/Form';

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <>
      <h1>
        Necesitas comunicarte?
      </h1>
      <h4>
        Completá el formulario.
      </h4>
      <br />
      <br />
      <Form />
    </>
  );
};

export default Contact;
