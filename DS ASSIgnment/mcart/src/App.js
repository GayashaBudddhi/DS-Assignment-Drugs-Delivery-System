import React, {Component} from 'react';
import './App.css';
import Signup from "./components/SignUp/Signup";
import Signin from "./components/SignIn/Signin";
import Home from "./components/Home/Home";
import Ahome from "./components/Ahome/Ahome";
import Master from './components/Ahome/Master';
import CreateProduct from './components/Ahome/CreateProduct';
import DisplayProduct from './components/Ahome/DisplayProduct';
import UpdateProduct from './components/Ahome/UpdateProduct';
import Basket from './components/Basket';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Payment from './components/card/Payment';

export default class App extends Component {
  render() {
    let navLink = (
      <div className="Tab">
        <NavLink to="/sign-in" activeClassName="activeLink" className="signIn">
          Sign In
        </NavLink>
        <NavLink exact to="/" activeClassName="activeLink" className="signUp">
          Sign Up
        </NavLink>
      </div>
    );
    const login = localStorage.getItem("isLoggedIn");
    console.log("login:"+login);
    return (
      <div className="App">
        {login ?  (
          <Router>
            <Route exact path="/" component={Signup}></Route>
            <Route path="/sign-in" component={Signin}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/ahome" component={Ahome}></Route>
            
      <Route path="/avhome" component={Master} />
      <Route path="/add-item" component={CreateProduct} />
        <Route path="/display-item" component={DisplayProduct} />
        <Route path="/:id/edit" component={UpdateProduct} />

        <Route path="/cart-items" component={Basket} />

        <Route path="/payment/:V" component={Payment} />

          </Router>
        ) : (

          <Router>
            {navLink}
            <Route exact path="/" component={Signup}></Route>
            <Route path="/sign-in" component={Signin}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/ahome" component={Ahome}></Route>
            
            <Route path="/avhome" component={Master} />
      <Route path="/add-item" component={CreateProduct} />
        <Route path="/display-item" component={DisplayProduct} />
        <Route path="/:id/edit" component={UpdateProduct} />

        <Route path="/cart-items"  component={Basket} />
        <Route path="/payment/:V" component={Payment} />
          </Router>
        )}
      </div>
    );
  }
}