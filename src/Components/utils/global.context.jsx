import React, { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';

// Definir el estado inicial
const savedTheme = localStorage.getItem('theme');

const initialState = {
  theme: savedTheme || '',
  dentista: [],
};

// Definir el reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'getDentista':
      return { ...state, dentista: action.payload };
    case 'toggleTheme':
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return { ...state, theme: newTheme };
    default:
      return state;
  }
};

// Crear el contexto
const ContextGlobal = createContext();

// Hook personalizado para acceder al contexto
const useContextGlobal = () => useContext(ContextGlobal);

// Definir el proveedor del contexto
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const urlApi = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios.get(urlApi).then((resp) => {
      dispatch({ type: 'getDentista', payload: resp.data });
    });
  }, []);

  useEffect(() => {
    document.body.className = state.theme;
  }, [state.theme]);

  const handleToggleTheme = () => {
    dispatch({ type: 'toggleTheme' });
  };

  return (
    <ContextGlobal.Provider value={{ state, dispatch, handleToggleTheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export { ContextProvider, useContextGlobal, ContextGlobal };
