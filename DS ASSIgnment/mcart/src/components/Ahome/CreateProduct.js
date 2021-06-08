import React, {Component} from 'react';
import { Link  } from 'react-router-dom';
import axios from 'axios';
import MyGlobleSetting from './MyGlobleSetting';
import './acss.css'

class CreateProduct extends Component {
  constructor(props){
    super(props);
    this.state = {
      productName: '',
      productCode: '',
      catid: '',      
      productinfo: '',
      productprice: ''
    };


    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }
  handleChange1(e){
    this.setState({
      productName: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      productCode: e.target.value
    })
  } 
  handleChange3(e){
    this.setState({
      catid: e.target.value
    })
  }
  handleChange4(e){
    this.setState({
      productinfo: e.target.value
    })
  }
  handleChange5(e){
    this.setState({
      productprice: e.target.value
    })
  }
  handleSubmit(e){
    
    e.preventDefault();
    const products = {
      pro_name:  this.state.productName,
      pro_code:  this.state.productCode,
      cat_id:  this.state.catid,      
      pro_info:  this.state.productinfo,
      pro_price:  this.state.productprice
    }
    
    console.log(products);
    let uri = MyGlobleSetting.url + '/api/additems';
    console.log(uri);
    alert(`added successful`);
    axios.post(uri, products).then((response) => {
      this.props.history.push('/ahome');
    });
  }


    render() {
      return (
      <div className="prodview">
        
        <Link to="/ahome" className="btn btn-outline-dark" style={{float:'right'}}>X</Link>
        <h1>Add Product</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Product Name:</label>
                <input type="text" className="form-control" onChange={this.handleChange1} required/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Product Code:</label>
                <input type="text" className="form-control" onChange={this.handleChange2} required/>
              </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>cat id:</label>
                <input type="text" className="form-control" onChange={this.handleChange3} required/>
              </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                  <label>Product price:</label>
                  <input type="text" className="form-control col-md-6" onChange={this.handleChange5} required/> 
                </div>
              </div>
            </div>
            <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>product infomation:</label>
                <input type="text" className="form-control" onChange={this.handleChange4} required/>
              </div>
            </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary">Add Product</button> &nbsp;
              <Link to="/ahome" className="btn btn-success">Go back</Link>
            </div>
        </form>
  </div>
      )
    }
}
export default CreateProduct;