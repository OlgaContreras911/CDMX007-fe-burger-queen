import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => (
  <div className="nav">
    <h2 className="logo"><NavLink className="logo-link" exact to="/">Menú</NavLink></h2>
    <ul className="nav-menu">
        <li><NavLink className="nav-menu__link" exact to="/">Inicio</NavLink></li>
        <li><NavLink className="nav-menu__link" to="/Breakfast">Desayuno</NavLink></li>
        <li><NavLink className="nav-menu__link" to="/Burgers">Hmburgesas</NavLink></li>  
        <li><NavLink className="nav-menu__link" to="/Complements">Complementos</NavLink></li> 
        <li><NavLink className="nav-menu__link" to="/Drinks">Bebidas</NavLink></li> 
       
    </ul>
  </div>
);

export default Navbar;
