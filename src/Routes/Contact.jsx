import React from 'react';
import Form from '../Components/Form';
import '../Components/utils/styles/Contact.css'


// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='contactContainer'>
      <h1>
        Necesitas comunicarte?
      </h1>
      <h5>
        Completá el formulario.
      </h5>
      <Form />
    </div>
  );
};

export default Contact;
