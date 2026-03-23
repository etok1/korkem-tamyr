import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

import image1 from "../assets/images/muppet1.jpg";
import image2 from "../assets/images/muppet2.jpg";
import image3 from "../assets/images/muppet3.jpg";
import image4 from "../assets/images/muppet4.jpg";
import image5 from "../assets/images/muppet5.jpg";
import image6 from "../assets/images/muppet6.jpg";
import image7 from "../assets/images/muppet7.jpg";
import image8 from "../assets/images/muppet8.jpg";
import image9 from "../assets/images/muppet9.jpg";
import image10 from "../assets/images/muppet10.jpg";
import image11 from "../assets/images/muppet11.jpg";
import type { MouseEventHandler } from "react";


function CustomNextArrow({ className, onClick }: { 
  className?: string; 
  onClick?: MouseEventHandler<HTMLDivElement>; 
}) {
  return (
      <div
      className={className}
      style={{ 
        right: "-50px", 
        zIndex: 1,
        width: "40px",
        height: "40px",
        background: "white",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
      }}
      onClick={onClick}
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="black" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6"/>
      </svg>
    </div>
  );
}

function CustomPrevArrow({ className, onClick }: { 
  className?: string; 
  onClick?: MouseEventHandler<HTMLDivElement>; 
}) {
  return (
    <div
      className={className}
      style={{ 
        left: "-50px", 
        zIndex: 1,
        width: "40px",
        height: "40px",
        background: "white",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
      }}
      onClick={onClick}
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="black" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="m15 18-6-6 6-6"/>
      </svg>
    </div>
  );
}

export default function SliderMuppet() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, dots: false
        }
      }
    ]
  };

  const images = [
    {
      img: image1,
    },
    {
      img: image2,
    },
    {
      img: image3,
    },
    {
      img: image4,
    },
    {
      img: image5,
    },
    {
      img: image6,
    },
    {
      img: image7,
    },
    {
      img: image8,
    },
    {
      img: image9,
    },
    {
      img: image10,
    },
    {
      img: image11,
    },
  ];
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="slide-item">
          <img rel="preload"
            src={image.img}
            alt={`podcast ${index}`}
            className="podcast-image"
          />
        </div>
      ))}
    </Slider>
  );
}
