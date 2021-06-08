import React from 'react';
import {Carousel} from 'react-bootstrap';
import img1 from './../assest/img/2.jpg';
import img2 from './../assest/img/4.jpg';
import img3 from './../assest/img/3.jpg';
import Logo from './../assest/img/Logo.png';



const Main = (props) => {
    return(
<Carousel fade={true}>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
      height="630px"
    />
    <Carousel.Caption>
      
      <img src={Logo} height="20%" width="20%" alt="logo of the company" />

      <h3>Welcome,{props.fname.charAt(0).toUpperCase()+ props.fname.slice(1)} </h3>
      
      <p>
         You have Logged in
            successfully.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
      height="630px"
    />
    <Carousel.Caption>
      <h3>Easy to Use</h3>
      <p>Search the medicine you want to purchase and check out from the selected cart.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
      height="630px"
    />
    <Carousel.Caption>
      <h3>User Friendly</h3>
      <p>With a user-friendly interface and easy navigation, we have decreases search time and increases satisfaction, fulfilling your needs in a fast and efficient way.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default Main;
