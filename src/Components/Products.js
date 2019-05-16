import React, { Component } from "react";
import "../Css/Products.css";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("https://burger-queen-70c13.firebaseio.com/products.json")
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }
  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading</div>;
    } else if (window.location.href.includes("Burgers")) {
      return (
        <div className="Burgers">
          {items
            .filter(items => items.type.includes("burgers"))
            .map(item => (
              <button className="btn-burger">
                <div className="circle">
                  <img className="burgerdoble" src={item.img} />
                </div>
                <div className="text">{item.name}</div>
                <div className="price">${item.price}</div>
              </button>
            ))}
        </div>
      );
    } else if (window.location.href.includes("Breakfast")) {
      return (
        <div className="Burgers">
          {items
            .filter(items => items.type.includes("breakfast"))
            .map(item => (
              <button className="btn-burger">
                <div className="circle">
                  <img className="burgerdoble" src={item.img} />
                </div>
                <div className="text">{item.name}</div>
                <div className="price">${item.price}</div>
              </button>
            ))}
        </div>
      );
    } else if (window.location.href.includes("Drinks")) {
      return (
        <div className="Complements">
          {items
            .filter(items => items.type.includes("drinks"))
            .map(item => (
              <button className="btn-complements">
                <div className="circle">
                  <img className="burgerdoble" src={item.img} />
                </div>
                <div className="text">{item.name}</div>
                <div className="price">${item.price}</div>
              </button>
            ))}
        </div>
      );
    } else if (window.location.href.includes("Complements")) {
      return (
        <div className="Complements">
          {items
            .filter(items => items.type.includes("complements"))
            .map(item => (
              <button className="btn-complements">
                <div className="circle">
                  <img className="burgerdoble" src={item.img} />
                </div>
                <div className="text">{item.name}</div>
                <div className="price">${item.price}</div>
              </button>
            ))}
        </div>
      );
    }
  }
}

export default Products;
