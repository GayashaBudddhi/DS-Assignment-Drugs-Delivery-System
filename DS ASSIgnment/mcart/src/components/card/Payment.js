import React from 'react';
import emailjs from 'emailjs-com';
import Cards from 'react-credit-cards';
import { Link  } from 'react-router-dom';
import 'react-credit-cards/es/styles-compiled.css';
import '../Ahome/acss.css'
export default class Payment extends React.Component {
    //disabled due to wso2 intergartion

    
 
submit = (e) => {
    e.preventDefault();
    //console.log(creditCardData);
    //method to be added
    alert(`payment successful`);
    const templateId = 'template_xp5p19d';
    const serviceID = 'service_3709jtd';
    // emailjs.send(serviceID,templateId, 'serviceID', 'tandinwangchen272gmail.com')
    // .then((response) => {
    //    console.log('SUCCESS!', response.status, response.text);
    // }, (err) => {
    //    console.log('FAILED...', err);
    // });

 this.props.history.push('/home');
}

//end of email intergration
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
 
  render() {
    const total = this.props.match.params.V;
    return (
      <div className="prodview">
        <Link to="/home" className="btn btn-outline-dark" style={{float:'right'}}>X</Link>
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form className="cardv" onSubmit={this.submit}>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            required/>

            <input
            type="tel"
            name="name"
            placeholder="Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            required/>
          <input
            type="tel"
            name="expiry"
            placeholder="expiry"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            required/>
          <input
            type="tel"
            name="cvc"
            placeholder="cvc"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            required/>
        <br /><br />
        Total: {total}<br />
        <input type="submit" value="pay" className="btn btn-success" />
        <input type="reset" value="reset" className="btn btn-danger"/>
        </form>
      </div>
    );
  }
}