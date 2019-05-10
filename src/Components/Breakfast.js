import React from "react";
import '../Css/Breakfast.css';
import btnsandwich from "../Assets/btnsandwich.png"
import btncoffe from "../Assets/btncoffe.png"
import btnbtnjuice from "../Assets/btnjuice.png"
import btnmilkcoffe from "../Assets/btnmilkcoffe.png"

const Breakfast =(props)=>{
    return (
        <div className="Burger-total">
            <div className="Burger-menu">
            <button className="btn-break">
              <div className="circle">
              <img className="burgerdoble" src={btnsandwich} /></div>
              <div className="textBreak">Sandwich de jamón y queso</div>
              <div className="price">$35</div>
              </button>
              <button className="btn-break">
              <div className="circle">
              <img className="burgerdoble" src={btncoffe} /></div>
              <div className="textBreak">Café Americano</div>
              <div className="price">$20</div>
              </button>
            </div>
            <div className="Burger-menubreak">
              <button className="btn-break">
              <div className="circle">
              <img className="burgerdoble" src={btnbtnjuice} /></div>
              <div className="textBreak">Jugo natural</div>
              <div className="price">$15</div>
              </button>
              <button className="btn-break">
              <div className="circle">
              <img className="burgerdoble" src={btnmilkcoffe} /></div>
              <div className="textBreak">Café con leche</div>
              <div className="price">$28</div>
              </button>
             
            </div> 
        </div>)
}
 export default Breakfast;