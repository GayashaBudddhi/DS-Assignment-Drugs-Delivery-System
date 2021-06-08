import React from 'react'
import './Popup.css';

function Registerpanel(props) {

    return (props.trigger) ? (
     <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>x</button>
            {props.children}
   
       <form className="signup-form">

        <h1>SignUp</h1>
            Email:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="email" id="email" placeholder="Email "  size="50" autocomplete="off"  required />  <br />
            
            Name:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="name" id="name" placeholder="Full name " size="50" autocomplete="off"  required />  <br />
            
            Password: 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <input type="password" name="pwd" id="pwd" placeholder="Password " size="50" autocomplete="off"  required />  <br />
            
            Confirm Password: 
            &nbsp;&nbsp;
            <input type="password" name="pwd2" id="pwd2" placeholder="Confirm Password " size="50" autocomplete="off"  required />  <br />


            <button type="submit" class="btn btn-primary btn-ghost mt-2 mr-4 float-right">Submit</button> 


        </form>
        </div>         
     </div>
) : "";
}

export default Registerpanel