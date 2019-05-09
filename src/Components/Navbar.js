import React from 'react';
import { NavLink } from 'react-router-dom';
import logburger from "../Assets/logburger.png"
import '../Css/Navbar.css';


const Navbar = (props) => (
 <div className="size-1">
 <div className="nav color-golden">
     <ul className="nav-menu color-golden">
        <img className="log-burger" src={logburger} />
        {/* <li><NavLink className="nav-menu__link" exact to="/">Inicio</NavLink></li> */}
        <li><NavLink className="nav-menu__link color-golden" to="/Breakfast">Desayuno</NavLink></li>
        <li><NavLink className="nav-menu__link  color-golden color-golden" exact to="/">Hamburgesas</NavLink></li>
        {/* <li><NavLink className="nav-menu__link" to="/Burgers">Hmburgesas</NavLink></li>   */}
        <li><NavLink className="nav-menu__link color-golden" to="/Drinks">Bebidas</NavLink></li> 
        <li><NavLink className="nav-menu__link color-golden" to="/Complements">Complementos</NavLink></li>    
    </ul>
   
   <div className="nav">
       <ul className="nav-menu">
           <li className="column-ticketone">Cant.</li>
           <li className="column-tickettwo">Producto</li>
           <li>Precio</li>
       </ul>
   </div>

  </div>
  </div>
);


export default Navbar;
