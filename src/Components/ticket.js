import React, { Component } from "react";
import "../Css/Products.css";
import minus from "../Assets/minus.png";

class Ticket extends Component {
  render() {
    const { comand, btnDelete, btnDeleteAll } = this.context;

    return (
      <div className="Ticket">
        {comand.map((comand, index) => (
          <ul key={index} className="order-list">
            <li className="product-list">
              <div className="btn-order">
                <div className="text-order">
                  {comand.origin} {comand.name}
                </div>
                <div className="quantity-order">{comand.quantity}</div>
                <div className="price-order">${comand.total}</div>
                <button
                  className="btn-delete"
                  onClick={() => btnDelete(comand)}
                >
                  <img className="btn-image" src={minus} />
                </button>
              </div>
            </li>
          </ul>
        ))}

        <div className="total">
          Total: $
          {comand.reduce((accumulate, current) => {
            return accumulate + current.total;
          }, 0)}
        </div>
        <div className="btn-deleteA">
          <button className="btn-deleteall" onClick={() => btnDeleteAll()}>
            <div className="deleteall">Cancelar Orden</div>
          </button>

          <button className="btn-confirmall">
            <div className="confirmall">Confirmar Orden</div>
          </button>
        </div>
      </div>
    );
  }
}
export default Ticket;
