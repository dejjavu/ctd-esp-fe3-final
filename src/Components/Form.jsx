import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from "formik";
import * as yup from "yup";
import { Grid } from '@mui/material';

const Form = () => {
  const initialValues = {
    nombre: "",
    email: "",
  };

  const [enviado, setEnviado] = useState(false);

  const enviarFormulario = (data) => {
    console.log(data);
    setEnviado(true);
  };

  const validationSchema = yup.object({
    nombre: yup
      .string()
      .matches(/^[a-zA-Z\s]{3,}$/, "El nombre debe tener al menos 3 caracteres y no debe contener símbolos")
      .required("Debes ingresar un nombre"),
    email: yup
      .string()
      .email("Ingresa un email válido")
      .required("Debes ingresar un email"),
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: enviarFormulario,
  });

  return (
    <div>
      {enviado ? (
        <p>Gracias {values.nombre}. Nos pondremos en contacto contigo a {values.email} a la brevedad.</p>
      ) : (
        <form className="form-container" onSubmit={handleSubmit}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <TextField
                id="nombre"
                name="nombre"
                label="Nombre"
                value={values.nombre}
                variant="filled"
                onChange={handleChange}
                error={!!errors.nombre}
                helperText={errors.nombre}
              />
            </Grid>
            <Grid item>
              <TextField
                id="email"
                name="email"
                label="Email"
                value={values.email}
                variant="filled"
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" color="primary">
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
