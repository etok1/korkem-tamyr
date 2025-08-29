// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../App.css'

import image1 from '../../assets/podcast1.jpg'
import image2 from '../../assets/podcast2.jpg'
import image3 from '../../assets/podcast3.jpg'
import image4 from '../../assets/podcast4.jpg'


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
        link: '',
        img: image1,
    },{
        link: '',
        img: image2,
    },{
        link: '',
        img: image3,
    },{
        link: '',
        img: image4,
    }
  ]
  return (
   
        <Slider {...settings}>
            {images.map((image, index) => (
                <div className="h-full md:h-[300px] md:w-[300px] overflow-hidden">
                    <img src={image.img} alt={`podcast ${index}`} className="w-full h-full rounded-2xl"/>
                </div>
            ))}
        </Slider>
    
  );
}