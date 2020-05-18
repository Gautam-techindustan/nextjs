import React from 'react';
import { ListGroup } from 'react-bootstrap'
import Slider from 'react-slick';

// import './slider.css'
 class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
 
    return (
      <div className="slider-container ">
        <Slider { ...settings}>
        {this.props.children}
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider ;
