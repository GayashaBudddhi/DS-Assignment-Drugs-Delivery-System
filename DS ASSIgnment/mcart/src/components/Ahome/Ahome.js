
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AHeader from '../AHeader';
import Footer from '../footer';
import DisplayProduct from "./DisplayProduct";



require('./bootstrap');
export default class AHome extends Component {


  state = {
    navigate: false, 
  };



  onLogoutHandler = () => {
    localStorage.clear();
    this.setState({
      navigate: true,
    });
  };
  render() {
    const user = JSON.parse(localStorage.getItem("userData"));
    const { navigate } = this.state;
    if (navigate) {
      return <Redirect to="/" push={true} />;
    }
    return (
      
      <div className="container-main">
      <AHeader fname={user.full_name} lout={this.onLogoutHandler} /> 
      <DisplayProduct />
      <Footer atype="Admin Portal"/>
      
      </div>
    );
  }
}