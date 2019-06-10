import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Products from "./Components/Products";
import Navbar from "./Components/Navbar";
import Ticket from "./Components/ticket";

import "./Css/App.css";

import { AppContext, AppContextProvider } from "./Components/AppContext";

Products.contextType = AppContext;
Ticket.contextType = AppContext;
class App extends Component {
  render() {
    return (
      <AppContextProvider>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            {/*<Route exact path="/"  component={Home}/> */}
            {/* <Route exact path="/" component={Burgers} /> */}
            {/*<Route path="/Burgers/" render={()=> <Burgers title="Burgers"/> }/>*/}
            <Route
              path="/Burgers"
              render={() => <Products title="Burgers" />}
            />
            <Route
              path="/Breakfast"
              render={() => <Products title="Breakfast" />}
            />
            <Route
              path="/Complements"
              render={() => <Products title="Complements" />}
            />
            <Route path="/Drinks" render={() => <Products title="Drinks" />} />
          </div>
        </BrowserRouter>
      </AppContextProvider>
    );
  }
}

export default App;
