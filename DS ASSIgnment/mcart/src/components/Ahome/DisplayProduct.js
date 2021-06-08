import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MyGlobleSetting from './MyGlobleSetting';
import './acss.css';
import AddIcon from '@material-ui/icons/Add';

class DisplayProduct extends Component {
  constructor(props) {
       super(props);
       this.state = {
         value: '', 
         products: ''
        };
        
     }
     componentDidMount(){
       
       axios.get(MyGlobleSetting.url + '/api/products')
       .then(response => {
         this.setState({ products: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })
     }

      
  
     tabRow(){

     
       if(this.state.products instanceof Array){
         return this.state.products.map(function(object, i){
             return(
              <tr key={object.id} >
              <td>
                {i+1}
              </td>
              <td>
                {object.pro_name}
              </td>
              <td>
                {object.pro_code}
              </td>
              <td>
                {object.cat_id}
              </td>
              <td>
                {object.pro_info}
              </td>
              <td>
                {object.pro_price}
              </td>
              <td className="amiddle">
              <form>
               <Link to={object.id+"/edit"}   className="btn btn-primary">Edit</Link>
             </form>
              </td>
            </tr>
             );

         })
       }
     }


  render(){
    return (
      <div className="datadisplay"><br />
        <h1>Products</h1>
        <div className="row">
          <div className="col-md-10"></div>
          <div className="addd">
            <Link to="/add-item">
            <AddIcon  style={{ fontSize: 50}} /><br />
              Add Product 
            </Link>
          </div>
        </div><br />


        <table className="table table-hover">
            <thead>
            <tr>
                <td><b>ID</b></td>
                <td><b>Product Name</b></td>
                <td><b>Product code</b></td>
                <td><b>cat_id</b></td>
                <td><b>Product information</b></td>
                <td width="200px"><b>Product Price</b></td>
                <td width="100px" className="amiddle"><b>Actions</b></td>
            </tr>
            </thead>
            <tbody>
              {this.tabRow()}

              
              
            </tbody>
        </table>
    </div>
    )
  }
}
export default DisplayProduct;