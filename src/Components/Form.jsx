import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from "formik";
import * as yup from "yup";
import { Grid } from '@mui/material';

const Form = () => {
  const valoresIniciales = {
    nombre: "",
    email: "",
  };

  const [enviado, setEnviado] = useState(false);

  const enviarForm = (data) => {
    console.log(data);
    setEnviado(true);
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    validationSchema: yup.object({
      nombre: yup
        .string()
        .matches(/^[a-zA-Z\s]{3,}$/, "El nombre debe tener al menos 3 caracteres y no debe contener símbolos")
        .required("Debes ingresar un Nombre"),
      email: yup
        .string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Ingresa un email válido")
        .required("Debes ingresar un Email"),
    }),
    initialValues: valoresIniciales,
    onSubmit: enviarForm,
  });

  return (
    <div>
      {enviado ? (
        <p>Gracias {values.nombre} Nos pondremos en contacto a {values.email} a la brevedad.</p>
      ) : (
        <form className="form-container" onSubmit={handleSubmit}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <TextField
                id="outlined-basic"
                name="nombre"
                label="Nombre"
                value={values.nombre}
                variant="outlined"
                onChange={handleChange}
                error={errors.nombre}
                helperText={errors.nombre}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                name="email"
                label="Email"
                value={values.email}
                variant="outlined"
                onChange={handleChange}
                error={errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained">
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </div>
  );
};

export default Form;
