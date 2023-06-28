import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useContextGlobal } from '../Components/utils/global.context';

const Navbar = () => {
  const { handleToggleTheme } = useContextGlobal();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          DH Odonto
        </Typography>
        <div className='menu' style={{ marginLeft: 'auto' }}>
          <Link to="/" style={{ textDecoration: 'none', marginRight: '10px' }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none', marginRight: '10px' }}>
            <Button color="inherit">Contacto</Button>
          </Link>
          <Link to="/favs" style={{ textDecoration: 'none', marginRight: '10px' }}>
            <Button color="inherit">Favoritos</Button>
          </Link>
          <Button color="inherit" onClick={handleToggleTheme}>
            Cambiar Tema
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
