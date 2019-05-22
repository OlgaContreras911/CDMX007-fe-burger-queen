import React from "react";

export const AppContext = React.createContext();
const order = [];
export class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      comand: [],
      isLoaded: false
    };
    this.btnOrder = this.btnOrder.bind(this);
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
    order.push(items);
    this.setState({
      comand: order
    });
    console.log(order);
  }

  render() {
    const { comand } = this.state;
    return (
      <AppContext.Provider
        value={{
          items: this.state.items,
          order: this.state.order,
          btnOrder: this.btnOrder,
          comand
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
export const AppContextConsumer = AppContext.Consumer;
