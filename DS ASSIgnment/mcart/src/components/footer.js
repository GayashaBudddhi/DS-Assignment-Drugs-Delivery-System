import React from 'react'
import styled from 'styled-components'

function footer(props){
    
    return(
        <Wrapper>
            <LogoWrapper> 
                {props.atype}
                <br />   
                 © 2021 Medkart Pharmacy. All Rights Reserved.... SLIIT Assignment    
                    
            </LogoWrapper>
        </Wrapper>
    )
}

export default footer;


const Wrapper = styled.div`
    
    align-items :center;
    height:auto; 
    min-height: 100%;
    padding: 16px 4px 16px 4px;
    text-align: center;
    background-color: #4bc6cc;
    font-fmaily: Monaco;
    color: white;
`
const LogoWrapper = styled.div`
    .MuiSvgIcon-root{
       color: white;
       font-size: 32px;
       cursor: pointer; 
    }
`