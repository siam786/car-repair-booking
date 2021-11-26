import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const Slider = () => {
    return (
        <div>
           <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/Rc4Xb7d/slide12.jpg"
      alt="Car Repair Service"
    />
    <Carousel.Caption>
      <h3>Car repair service</h3>
      <p>Car repair service 24 hour.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/4YkvqJj/slide11.jpg"
      alt="Autocare"
    />
    <Carousel.Caption>
      <h3>Autocare service</h3>
      <p>We are help repair service.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/Rc4Xb7d/slide12.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Smart Care Service</h3>
      <p>Smart Car service always</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
        </div>
    );
};

export default Slider;