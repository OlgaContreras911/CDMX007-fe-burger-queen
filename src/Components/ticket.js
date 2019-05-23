import React, { Component } from "react";
import "../Css/Products.css";

class Ticket extends Component {
  render() {
    const { comand, btnDelete } = this.context;

    return (
      <div className="Ticket">
        {comand.map((comand, index) => (
          <ul key={index} className="order-list">
            <li className="product-list">
              <div className="btn-order">
                <div className="quantity-order">{comand.quantity}</div>
                <div className="text-order">{comand.name}</div>
                <div className="price-order">${comand.total}</div>
                <button
                  className="btn-delete"
                  onClick={() => btnDelete(comand)}
                >
                  Delete
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
      </div>
    );
  }
}
export default Ticket;
