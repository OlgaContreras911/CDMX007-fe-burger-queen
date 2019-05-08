import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => (
  <div className="nav">
    <h2 className="logo"><NavLink className="logo-link" exact to="/">Menú</NavLink></h2>
    <ul className="nav-menu">
        <li><NavLink className="nav-menu__link" exact to="/">Home</NavLink></li>
        <li><NavLink className="nav-menu__link" to="/Breakfast">Breakfast</NavLink></li>
        <li><NavLink className="nav-menu__link" to="/Burgers">Burgers</NavLink></li>  
        <li><NavLink className="nav-menu__link" to="/Complements">Complements</NavLink></li> 
        <li><NavLink className="nav-menu__link" to="/Drinks">Drinks</NavLink></li> 
       
    </ul>
  </div>
);

export default Navbar;
