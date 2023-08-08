"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface GameTypes {
  games: {
    id: string;
    image: string;
    title: string;
    url: string;
  }[];
}

const Carousel: React.FC<GameTypes> = ({ games }) => {
  console.log(games);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    "/image/protector.png",
    "/image/checker.png",
    "/image/protector.png",
    "/image/checker.png",
    "/image/checker.png",
  ];

  return (
    <div className="!overflow-hidden">
      <Slider {...settings}>
        {games.map((slide, index) => (
          <div className="" key={index}>
            <img src={slide.image} alt="protector" className="pr-4 w-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
