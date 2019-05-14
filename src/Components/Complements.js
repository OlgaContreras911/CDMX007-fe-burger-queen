import React from "react";
import "../Css/Burgers.css";
import btnfries from "../Assets/btnfries.png";
import btnonions from "../Assets/btnonions.png";
const Complements = props => {
  return (
    <div className="Burger-total">
      <div className="Burger-menu">
        <button className="btn-Drinks">
          <div className="circle">
            <img className="burgerdoble" src={btnfries} />
          </div>
          <div className="text">Papas a la Francesa</div>
          <div className="priceDrinks">$15</div>
        </button>
      </div>
      <div className="Burger-menu2">
        <button className="btn-Drinks">
          <div className="circle">
            <img className="burgerdoble" src={btnonions} />
          </div>
          <div className="text">Aros de Cebolla</div>
          <div className="price">$10</div>
        </button>
      </div>
    </div>
  );
};

export default Complements;
