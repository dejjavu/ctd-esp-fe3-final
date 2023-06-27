import React from 'react'
import {Link} from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
 <h3>DH Odonto</h3>
 <Link to = "/"> Home </Link>
 <Link to = "/contact"> Contacto </Link>
 <Link to = "/favs"> Favoritos </Link>
 <button>Cambiar Tema</button>

      </nav>
  )
}

export default Navbar