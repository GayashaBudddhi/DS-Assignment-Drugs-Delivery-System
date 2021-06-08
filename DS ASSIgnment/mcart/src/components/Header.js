import React, {useState} from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import axios from 'axios';

import { Redirect } from "react-router-dom";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Search from "./Search";

import MyGlobleSetting from './Ahome/MyGlobleSetting';

function Header(props){
    //calling the name of the user
    const [value,setValue]=useState('');
    const HandleSelect=(e)=>{
        console.log(e);
         setValue(e);
    
    }
    const handleDSubmit = (event) =>{
        event.preventDefault();
       let uri = MyGlobleSetting.url + `/api/user/${props.fid}`;
       axios.delete(uri);
       props.lout();

       alert(` your account is been deleted`);
     };
    return(
        <Wrapper>
            <LogoWrapper>
                <IconButton>
                    <LocalHospitalIcon />
                    MedShop
                </IconButton>                
            </LogoWrapper>

            <SearchWrapper>
                <SearchBarWrapper>
                    <IconButton>
                        <SearchIcon/>
                    </IconButton> 
                    <Search />

                </SearchBarWrapper>
            </SearchWrapper>

            <IconsWrapper>
                <IconButton>
                        
                <DropdownButton className="dropdown-menu-dark" onSelect={HandleSelect}>
                    <Dropdown.Header>
                            <h5><p className="mt-0 mb-0">
                                {props.fname.charAt(0).toUpperCase()+ props.fname.slice(1)}
                            </p></h5>
                    </Dropdown.Header>
                    
                    <Dropdown.Item eventKey="option-2" onClick={handleDSubmit}>
                            <p className="mt-0 mb-0">
                                Delete
                            </p>
                    </Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="option-3" onClick={props.lout}>
                        <p className="mt-0 mb-0">
                            Logout
                        </p>
                    </Dropdown.Item>
                </DropdownButton>

                </IconButton>
            </IconsWrapper> 
        </Wrapper>
    )
}

export default Header


const Wrapper = styled.div`
    display: flex;
    align-items :center;
    height: 60px;
    padding: 16px 4px 16px 4px;
    background-color: #4bc6cc;
    font-fmaily: Monaco;
    color: black;
`
const LogoWrapper = styled.div`
    .MuiSvgIcon-root{
       color: white;
       font-size: 32px;
       cursor: pointer; 
    }
`


const SearchWrapper = styled.div`
flex: 1;
`

const SearchBarWrapper = styled.div`
    background-color: #efefef;
    display: flex;
    height: 48px;
    width: 100%;
    border-radius: 50px;
    border: none;
    padding-left: 10px;
    align-items: center;

    form{
        display: flex;
        flex: 1;
    }

    form > input{
        background-color: transparent;
        border: none;
        width: 100%;
        margin-left:5px;
        font-size: 16px;
    }

    form > button {
        display: none;
    }

    input:focus{
        outline: none;
    }
`

const IconsWrapper = styled.div``
