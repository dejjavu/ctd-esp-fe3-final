import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";


export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);


const reducer = (state, action) => {
  switch (action.type) {
    case 'getDentista':
      return {
        ...state,
        dentista: action.payload,
      };
    default:
      return state;
  }
};


export const ContextProvider = ({ children }) => {
  
const [state, dispatch] = useReducer(reducer, initialState)

const urlApi = "https://jsonplaceholder.typicode.com/users"

useEffect(() => {
  axios.get(urlApi)
    .then(resp => {
      dispatch({ type: 'getDentista', payload: resp.data });
    });
}, []);

console.log('Datos del dentista obtenidos:', state.dentista);
  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext (ContextGlobal)