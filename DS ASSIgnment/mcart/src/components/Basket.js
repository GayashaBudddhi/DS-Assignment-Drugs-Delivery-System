import React, {Component} from 'react';
import { Link  } from 'react-router-dom';
import './Ahome/acss.css'

class Basket extends Component {
  render(props){
    const value = this.props.location.state.valuesss;
    console.log(value);  

    const Total = value.reduce((totalvalue, value) => totalvalue + parseInt(value[2], 10), 0);
    console.log(Total);
    return (
    <div className="cprodview">
        
        <Link to="/home" className="btn btn-outline-dark" style={{float:'right'}}>X</Link>
        <h1>M-Cart</h1>
        <h6>{value.length} items in the cart</h6>
        <hr />
        
        
          <table border="0"  className="ptview">
            <tr>
                <td className="hcartview">
                  Product Name
                </td>

                <td className="hcartview">
                  Price
                </td>
            </tr>
              {value.map((item,index) => 
                <tr key={index} >
                  <td className="cartview">
                  {item[1]}
                  </td>

                  <td className="cartview">
                  {item[2]}
                  </td>

                  
                </tr>
              )}
          </table>
          <hr />
          <div className="payview">
                Total: {Total} LKR
          </div>
          <button className="btn1 btn-success">
            <Link to={"/payment/"+Total}>
                Pay
            </Link>
          </button>
          <hr />
    </div>
    )
  }
}
export default Basket;