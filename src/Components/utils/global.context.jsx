import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {


const [dentist, setDentist] = useState([])


useEffect(() =>
axios.get("https://jsonplaceholder.typicode.com/users")
.then(res => setDentist(res.data.results))
)

  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};
