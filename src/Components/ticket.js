import React, { Component } from "react";
import "../Css/Products.css";

class Ticket extends Component {
  render() {
    const { comand } = this.context;

    return (
      <div className="Ticket">
        {comand.map(comand => (
          <ul className="order-list">
            <li className="product-list">
              <button className="btn-order">
                <div className="text-order">{comand.name}</div>
                <div className="price-order">${comand.price}</div>
              </button>
            </li>
          </ul>
        ))}
        <div className="total">
          Total: $
          {comand.reduce((accumulate, current) => {
            return accumulate + current.price;
          }, 0)}
        </div>
      </div>
    );
  }
}
export default Ticket;
