// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../App.css'

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
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  const images = [
    {
        link: '',
        img: '',
    },{
        link: '',
        img: '',
    },{
        link: '',
        img: '',
    },{
        link: '',
        img: '',
    },{
        link: '',
        img: '',
    },{
        link: '',
        img: '',
    },{
        link: '',
        img: '',
    },
  ]
  return (
   
        <Slider {...settings}>
            {images.map((image, index) => (
                <div className="!w-[150px] sm:!w-[250px] h-[200px] bg-slate-900">
                    <h3>{index + 1} {image.link}</h3>
                </div>
            ))}
        </Slider>
    
  );
}