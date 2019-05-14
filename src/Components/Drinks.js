import React from "react";
import "../Css/Drinks.css";
import btnwater from "../Assets/btnwater.png";
import btnsoda from "../Assets/btnsoda.png";

const Drinks = props => {
  return (
    <div className="Burger-total">
      <div className="Burger-menu">
        <button className="btn-Drinks">
          <div className="circle">
            <img className="burgerdoble" src={btnsoda} />
          </div>
          <div className="textDrinks">Refresco</div>
          <div className="priceDrinks">$15</div>
        </button>
      </div>
      <div className="Burger-menu2">
        <button className="btn-Drinks">
          <div className="circle">
            <img className="burgerdoble" src={btnwater} />
          </div>
          <div className="textDrinks">Agua</div>
          <div className="priceDrinks">$10</div>
        </button>
      </div>
    </div>
  );
};
export default Drinks;
