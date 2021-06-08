import React, {useState} from 'react'
import styled from 'styled-components'
import { IconButton } from '@material-ui/core';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
function AHeader(props){
    //calling the name of the user
    const [value,setValue]=useState('');
    const HandleSelect=(e)=>{
        console.log(e);
         setValue(e);

    
    //form implementing date
    
    }
    return(
        <Wrapper>
            <LogoWrapper>
                <IconButton>
                    <LocalHospitalIcon />
                    MedShop
                </IconButton>                
            </LogoWrapper>

            <SearchWrapper>
                
            </SearchWrapper>

            <IconsWrapper>

                <IconButton>
                        
                <DropdownButton className="dropdown-menu-dark" onSelect={HandleSelect}>
                    <Dropdown.Header>
                                <h5><p className="mt-0 mb-0">
                                {props.fname.charAt(0).toUpperCase()+ props.fname.slice(1)}
                                </p></h5>
                    </Dropdown.Header>


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

export default AHeader


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


const IconsWrapper = styled.div``
