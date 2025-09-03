// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'

import image1 from '../../assets/images/podcast1.jpg'
import image2 from '../../assets/images/podcast2.jpg'
import image3 from '../../assets/images/podcast3.jpg'
import image4 from '../../assets/images/podcast4.jpg'


export default function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true
    //     }
    //   },{
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
    // nextArrow: <CustomNextArrow />,
    // prevArrow: <CustomPrevArrow />,
  };

  const images = [
    {
        link: '/podcast/1',
        img: image1,
    },{
        link: '/podcast/2',
        img: image2,
    },{
        link: '/podcast/3',
        img: image3,
    },{
        link: '/podcast/4',
        img: image4,
    }
  ]
  return (
   
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} className="slide-item">
            <img 
              src={image.img} 
              alt={`podcast ${index}`} 
              className="podcast-image"
            />
          </div>
            ))}
        </Slider>
    
  );
}