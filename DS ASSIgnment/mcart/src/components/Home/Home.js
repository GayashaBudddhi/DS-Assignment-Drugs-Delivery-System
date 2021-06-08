import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Header from '../Header';
import Footer from '../footer';
import Main from '../main';

export default class Home extends Component {


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
      <Header fname={user.full_name} fid={user.id} lout={this.onLogoutHandler} />
      <Main fname={user.first_name} />        
      <Footer atype="User Portal"/>
      
      </div>
    );
  }
}