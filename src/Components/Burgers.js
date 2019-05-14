import React from "react";
import '../Css/Burgers.css';
import btnburger from "../Assets/btnburger.png"
import btnburgerchicken from "../Assets/btnburgerchicken.png"
import btnburgerveg from "../Assets/btnburgerveg.png"
import btnegg from "../Assets/btn-egg.png"
import btnburgersim from "../Assets/btnburgersim.png"
import btnchesse from "../Assets/btnchesse.png"
const Burgers = (props) => {
    return (
<div className="Burger-total">
    <div className="Burger-menubur one">
    <button className="btn-burger">
      <div className="circle">
      <img className="burgerdoble" src={btnburgersim} /></div>
      <div className="text">Sencilla Res</div>
      <div className="price">$40</div>
      </button>
      <button className="btn-burger">
      <div className="circle">
      <img className="burgerdoble" src={btnburgersim} /></div>
      <div className="text">Sencilla Pollo</div>
      <div className="price">$40</div>
      </button>
      <button className="btn-burger">
      <div className="circle">
      <img className="burgerdoble" src={btnburgersim} /></div>
      <div className="text">Sencilla Vegetariana</div>
      <div className="price">$40</div>
      </button>
      <button className="btn-burger">
      <div className="circle">
      <img className="burgerdoble" src={btnchesse} /></div>
      <div className="text">Extra Queso</div>
      <div className="price">$40</div>
      </button>
    </div>
    <div className="Burger-menu2bur four">
      <button className="btn-burger">
      <div className="circle">
      <img className="burgerdoble" src={btnburger} /></div>
      <div className="text">Doble Res</div>
      <div className="price">$55</div>
      </button>
      <button className="btn-burger">
      <div className="circle">
      <img className="burgerdoble" src={btnburgerchicken} /></div>
      <div className="text">Doble Pollo</div>
      <div className="price">$55</div>
      </button>
      <button className="btn-burger">
      <div className="circle">
      <img className="burgerdoble" src={btnburgerveg} /></div>
      <div className="text">Doble Vegetariana</div>
      <div className="price">$55</div>
      </button>
      <button className="btn-burger">
      <div className="circle">
      <img className="burgerdoble" src={btnegg} /></div>
      <div className="textDrinks">Huevo</div>
      <div className="priceDrinks">$15</div>
      </button> 
    </div> 
</div>)
}


export default Burgers;