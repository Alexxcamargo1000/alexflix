import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`

  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 60px;
    height:100%;
    border-radius:4px 0 0 4px;
    transform: initial;
   
    &:before {
      font-size: 30px;
      color:rgba(40,40,40,.5);
    }

    @media (max-width: 800px){
      display:none !important;
    }

   
  }
  
  .slick-prev {
    left:0;
    background-image: linear-gradient(-90deg,rgba(20,20,20,.5), black);
    &:hover {      
      &:before{
        color:#fff;
      }
    }

 
  }
  .slick-next {
    right: 0px;
     background-image: linear-gradient(90deg, rgba(20,20,20,.5), rgba(20,20,20,.8));
     &:hover {      
      &:before{
        color:#fff;
      }
    }
    
  }
  .slick-arrow::before{
      font-size:45px;
    }
  

  
`;

export const SliderItem = styled.li`
position: relative;
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 