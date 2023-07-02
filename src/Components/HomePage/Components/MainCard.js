import React, { useState, useEffect } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import '../Css/MainCard.css';
import carouselData from '../Data/carouselData.json';

function MainCard() {
  const [carouselItems, setCarouselItems] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    setCarouselItems(carouselData);
  }, []);

  const handleSlideChange = (selectedIndex) => {
    setCurrentSlideIndex(selectedIndex);
  };

  return (
    <Card id="cardBody" className="card-body d-flex align-items-center justify-content-center pt-2" style={{ width: '100%' }}>
      <Card.Title id="cardTitle">{carouselItems[currentSlideIndex]?.title}</Card.Title>
      <Carousel id='carousel' className="box" activeIndex={currentSlideIndex} onSelect={handleSlideChange}>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <Card.Img id="cardImage" className="img-fluid" variant="top" src={item.src} alt={item.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Card.Text id='cardText'>
          Welcome to our Electronic Sales Event! Explore the latest and greatest in cutting-edge technology. From smartphones and laptops to smart home devices and audio equipment, we have everything you need to elevate your digital lifestyle. Discover incredible deals and discounts on top brands, empowering you to stay connected, entertained, and productive. Whether you're a gadget enthusiast, a tech-savvy professional, or simply looking to upgrade your electronics, our sale offers a wide range of options to cater to your needs. Don't miss out on this opportunity to embrace the future with exceptional electronics at unbeatable prices. Shop now and unlock a world of possibilities!
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MainCard;
