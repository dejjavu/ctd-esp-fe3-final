import React, { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import { Link } from 'react-router-dom';
import '../Components/utils/styles/Navbar.css';

const Navbar = () => {
  const { state, handleToggleTheme } = useContext(ContextGlobal);
  const { theme } = state;
  const isDarkMode = theme === 'dark';
  const themeClass = isDarkMode ? 'dark' : 'light';

  return (
    <div className={`navContainer ${themeClass}`}>
      <div className='logo'>
        <h3>DH Odonto</h3>
      </div>
      <div className='botones'>
        <Link to="/">
          <p className={`p ${themeClass}`}>Home</p>
        </Link>
        <Link to="/contact">
          <p className={`p ${themeClass}`}>Contacto</p>
        </Link>
        <Link to="/favs">
          <p className={`p ${themeClass}`}>Favoritos</p>
        </Link>
        <button className={`themeButton ${themeClass}`} onClick={handleToggleTheme}>
  {isDarkMode ? '☀️' : '🌚'}
</button>

      </div>
    </div>
  );
};

export default Navbar;
