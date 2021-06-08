import React from 'react';
import './Search.css';
import axios from 'axios';
import Loader from '../assest/img/preloader.gif';
import PageNavigation from './PageNavigation';
import Badge from '@material-ui/core/Badge';

import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import styled from 'styled-components'


class Search extends  React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			//search and pagination
			query: '',
            results: {},
            loading: false,
            message: '',
			totalResults: 0,
			totalPages: 0,
			currentPageNo: 0,
			//cartitmes
			count : 0,
			proID : '',
			cartItem : []

		};
		//implementing axios for serach sumbit entries
		this.cancel = '';
		
	}

	//calculated no of pages in db for search
	getPageCount = (total, denominator) => {
		const divisible = 0 === total % denominator;
		const valueToBeAdded = divisible ? 0 : 1;
		return Math.floor( total/denominator) + valueToBeAdded; 
	};


    //handles event listner
    handleOnInputChange = (event) => {
        const query = event.target.value;
		if ( ! query ) {
			this.setState({ query, results: {}, message: '', totalPages:0, totalResults:0 } );
		} else {
       		 this.setState({query, loading: true, message: ''  }, () => {
					this.fetchSearchResults(1, query);
				});
			}
    };

    fetchSearchResults = (updatedPageNo = '', query) => {
		const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
        const searchUrl = `http://127.0.0.1:8000/api/backend?s=${query}&${pageNumber}`;


        if (this.cancel){
			this.cancel.cancel();
		} 

		this.cancel = axios.CancelToken.source();

		axios.get(searchUrl,{
			cancelToken: this.cancel.token,
		})
			.then (res => {

				const total = res.data.total;
				const totalPagesCount = this.getPageCount(total, 5);
				const resultNotFoundMsg = ! res.data.hits.length ?
											'There are no more search results. Please try a new search' :
											'';
				this.setState({
					results: res.data.hits,
					message: resultNotFoundMsg,
					totalResults: total,
					totalPages: totalPagesCount,
					currentPageNo: updatedPageNo,
					loading: false
				});
				
			}).catch ((error)  => {
				if(axios.isCancel(error) || error ){
					this.setState({
						loading: false,
						message: 'failed to fetch the data. pls check network'
					});
				}
				
			});
    };

	handlePageClick = (type) => {
		
		const updatePageNo = 'prev' === type ? this.state.currentPageNo - 1 :
												this.state.currentPageNo + 1;

		if(! this.state.loading){
			this.setState({loading: true, message: ''}, () => {
				this.fetchSearchResults(updatePageNo, this.state.query);
			});
		}
	};

	//adding to cart
	
	  addNewItem = (input) => {
		  console.log("=========");
		  console.log(input);
		  if(input !== ""){
		   console.log("pushing values");
		   //due to thiss...
		   //this.setState({cartItem : [...this.state.cartItem, input]});
		
		  console.log(this.state.cartItem);
		  }
	  };


	renderSearchResults = () => {
		const {results} = this.state;
		// rtiis iscalled multiple times
		this.addNewItem(this.state.proID);

		if (Object.keys(results).length && results.length) {
			
			return (
				<div className="results-container">
						
									<div className="uhh1">
										Product Name
									</div>

									<div className="uhh2">
										Price
									</div>
					{results.map((result) => {
						return (
							<ul key={result.id} className="result-items">
								

								<li className="username">
									<div className="u1">
										{result.pro_name}
									</div>

									<div className="u2">
										LKR {result.pro_price}
									</div>	

									<div className="u3 mr-5">
										<ButtonGroup>          									
											<Addbutton 
												className="addbtn"
            									aria-label="add"
												onClick={() => this.setState({ 
													count: this.state.count + 1,
													proID: result.id,
													cartItem : [...this.state.cartItem, [result.id, result.pro_name, result.pro_price ]]
												})}	
         									>
            									Add
          									</Addbutton>
        								</ButtonGroup>
									</div>									
								</li>
							</ul>
						);
					})}
				</div>
			);
		}
	};
	
	render() {
        const {query, loading, message, currentPageNo, totalPages} = this.state;

		const showPrevLink = 1 < currentPageNo;
		const showNextLink = totalPages > currentPageNo;

		
	
		return (
			<div className="container">
				{/*Search Input*/}
				<div className="ocontainer">
				<label className="search-label" htmlFor="search-input"> 
					<input
						type="text"
                        name="query"
						value={query}
						id="search-input"
						placeholder="Search..."
                        onChange={this.handleOnInputChange}
					/>
                    
				</label>
				</div>

				<div className="scontainer" >
					{/*Error Message*/}
						{ message && <p className="message">{message}</p> }


					<PageNavigation 
					loading={loading}
					showPrevLink={showPrevLink}
					showNextLink={showNextLink}
					handlePrevClick={() => this.handlePageClick('prev')}
					handleNextClick={() => this.handlePageClick('next')}
					/>

					{/*Loader*/}
						<img  src={Loader} className={`search-loading ${loading ? 'show' : 'hide' }`}  alt="loader"/>
					
					{/* Search result */}
						{this.renderSearchResults()}
				</div>
				
				<div className="bage-c">
				<Badge badgeContent={this.state.count} color="primary">
					<Link to={{
						pathname: "/cart-items",
						state: {valuesss : this.state.cartItem} 
						
						}} className="cartss">
					<ShoppingCartIcon />
					</Link>
          				
        		</Badge>
				</div>
			</div>
			
			)
	}
}
export default Search;

const Addbutton = styled.div`
display: inline-block;
  padding: 5px 10px;
  margin-right:0px;
  font-size: 15px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4bc6cc;
  border: none;
  border-radius: 5px;
  box-shadow: 0 9px #999;

  :hover{
	background-color: #05595e;
  }

  :active {
	background-color: #05595e;
	box-shadow: 0 5px #666;
	transform: translateY(4px);
  }
`