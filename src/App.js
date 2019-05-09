import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Burgers from "./Components/Burgers"
import Navbar from "./Components/Navbar"
//import Home from "./Components/Home"
import Complements from "./Components/Complements"
import Breakfast from "./Components/Breakfast"
import Drinks from "./Components/Drinks"
import './Css/App.css';


class App extends Component {
  render(){
    return (
      <BrowserRouter>
   
       <div className="App">
         <Navbar />
          {/*<Route exact path="/"  component={Home}/> */} 
          <Route exact path="/"  component={Burgers}/> 
           {/*<Route path="/Burgers/" render={()=> <Burgers title="Burgers"/> }/>*/} 
           <Route  path="/Breakfast" render={()=> <Breakfast title="Breakfast"/> }/>
           <Route  path="/Complements" render={()=> <Complements title="Complements"/> }/>
           <Route  path="/Drinks" render={()=> <Drinks title="Drinks"/> }/>
           
       
       </div>
       </BrowserRouter>
     );
  }
  
}

export default App;
