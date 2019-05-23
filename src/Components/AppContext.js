import React from "react";

export const AppContext = React.createContext();
export class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      comand: [],
      uniqueItems: [],
      isLoaded: false
    };
    this.btnOrder = this.btnOrder.bind(this);
    this.btnDelete = this.btnDelete.bind(this);
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
  btnOrder(items) {
    let uniqueItems = [...this.state.comand];
    if (uniqueItems.includes(items)) {
      items.quantity = items.quantity + 1;
      items.total = items.price + items.total;
    } else {
      uniqueItems.push(items);
    }
    this.setState({
      comand: uniqueItems
    });
  }
  btnDelete(items) {
    let uniqueItems = [];
    if (items.quantity > 1 && this.state.comand.includes(items)) {
      items.quantity = items.quantity - 1;
      items.total = items.total - items.price;
      uniqueItems = this.state.comand;
    } else {
      uniqueItems = this.state.comand.filter(element => {
        return element !== items;
      });
    }

    this.setState({
      comand: [...uniqueItems]
    });
  }

  render() {
    const { comand } = this.state;
    return (
      <AppContext.Provider
        value={{
          items: this.state.items,
          btnOrder: this.btnOrder,
          btnDelete: this.btnDelete,
          comand
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
export const AppContextConsumer = AppContext.Consumer;
