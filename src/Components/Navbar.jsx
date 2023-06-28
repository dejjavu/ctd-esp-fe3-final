import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { useContextGlobal } from '../Components/utils/global.context';

const Navbar = () => {
  const { handleToggleTheme } = useContextGlobal();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    handleToggleTheme();
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`navContainer ${isDarkMode ? 'dark' : 'light'}`}>
      <div className='logo'>
        <h3>DH Odonto</h3>
      </div>
      <div className='botones'>
        <Link to="/">
          <p className={`p ${isDarkMode ? 'dark' : 'light'}`}>Home</p>
        </Link>
        <Link to="/contact">
        <p className={`p ${isDarkMode ? 'dark' : 'light'}`}>Contacto</p>
        </Link>
        <Link to="/favs">
        <p className={`p ${isDarkMode ? 'dark' : 'light'}`}>Favoritos</p>
        </Link>
        <p onClick={toggleTheme}>
          {isDarkMode ? '☀️' : '🌑'}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
