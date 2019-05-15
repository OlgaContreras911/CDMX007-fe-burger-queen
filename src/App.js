import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Products from "./Components/Products";
import Navbar from "./Components/Navbar";
//import Home from "./Components/Home"

import "./Css/App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/*<Route exact path="/"  component={Home}/> */}
          {/* <Route exact path="/" component={Burgers} /> */}
          {/*<Route path="/Burgers/" render={()=> <Burgers title="Burgers"/> }/>*/}
          <Route path="/Burgers" render={() => <Products title="Burgers" />} />
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
    );
  }
}

export default App;
