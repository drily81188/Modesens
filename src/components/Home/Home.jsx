import React, { Component } from "react";
import Carousel from "carousel-react-rcdev";
import { Slide } from "react-slideshow-image";
import img1 from "../../images/img-1.png";
import img2 from "../../images/img-2.png";
import img3 from "../../images/img-3.png";
import img4 from "../../images/img-4.png";
import img5 from "../../images/img-5.png";
import img6 from "../../images/img-6.png";
import img7 from "../../images/img-7.png";
import img8 from "../../images/img-8.png";
import img9 from "../../images/img-9.png";
import img10 from "../../images/img-10.png";
import img11 from "../../images/img-11.png";
import img12 from "../../images/img-12.png";
import img13 from "../../images/img-13.png";
import img14 from "../../images/img-14.png";
import img15 from "../../images/img-15.png";
import img16 from "../../images/img-16.png";
import img17 from "../../images/img-17.png";
import img18 from "../../images/img-18.png";
import img19 from "../../images/img-19.png";
import "react-slideshow-image/dist/styles.css";

const Home = () => {
  const slideImages = [
    "https://modesens.com/banner/12540/getimg/?img=%2Fbanner%2F20220617-modesens-Farfetch-1140x400-EN.jpg",
    "https://modesens.com/banner/12490/getimg/?img=%2Fbanner%2F20220616-modesens-SlamJam-1140x400-EN.jpg",
    "https://modesens.com/banner/12521/getimg/?img=%2Fbanner%2F20220618-modesens-Woolrich-1140x400-EN.jpg",
    "https://modesens.com/banner/12463/getimg/?img=%2Fbanner%2F20220614-modesens-salesneakers-1140x400-M.jpg",
    "https://modesens.com/banner/12451/getimg/?img=%2Fbanner%2F20220613-modesens-MSaintLaurent-1140x400-M.jpg",
    "https://modesens.com/banner/12475/getimg/?img=%2Fbanner%2F20220615-modesens-SSENSE-1140x400-EN.jpg",
    "https://modesens.com/banner/12533/getimg/?img=%2Fbanner%2F20220617-modesens-Mytheresa-1140x400.jpg",
  ];
  const slideImages2 = [img1, img2];
  const slideImages3 = [img3, img4];
  const slideImages4 = [
    "https://i.imgur.com/goCBWrv.png",
    "https://i.imgur.com/O04YCsl.png",
    "https://i.imgur.com/iPkSvqL.png",
    "https://i.imgur.com/cnNUT4D.png",
    "https://i.imgur.com/Gz6aZg0.png",
    "https://i.imgur.com/N5dPVaQ.png",
  ];
  const slideImages5 = [
    ,
    "https://i.imgur.com/Uc1FQhO.png",
    "https://i.imgur.com/dd1Gu8X.png",
    "https://i.imgur.com/5cYmvwk.png",
    "https://i.imgur.com/jE7IEHf.png",
    "https://i.imgur.com/O7VK6TS.png",
    "https://i.imgur.com/6uhUMmd.png",
    "https://i.imgur.com/w6IMifu.png",
    "https://i.imgur.com/jJJZd65.png",
  ];

  return (
    <>
      <div>
        <div className="slide-container">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div className="each-slide" key={index}>
                <div className="flex item-center justify-center">
                  <img width="80%" src={slideImage} alt="" />
                </div>
              </div>
            ))}
          </Slide>
          <Slide className="mt-16">
            {slideImages2.map((slideImage, index) => (
              <div className="each-slide" key={index}>
                <div className="flex item-center justify-center">
                  <img width="80%" src={slideImage} alt="" />
                </div>
              </div>
            ))}
          </Slide>
          <Slide className="mt-16">
            {slideImages3.map((slideImage, index) => (
              <div className="each-slide" key={index}>
                <div className="flex item-center justify-center">
                  <img width="80%" src={slideImage} alt="" />
                </div>
              </div>
            ))}
          </Slide>
          <div className="w-4/5 flex mt-16 m-auto overflow-hidden ">
            <Carousel>
              {slideImages4.map((slideImage, index) => (
                <img src={slideImage} alt="imagem" title="imagem" />
              ))}
            </Carousel>
          </div>
          <div className="w-4/5 flex mt-16 m-auto overflow-hidden ">
            <Carousel>
              {slideImages5.map((slideImage, index) => (
                <img src={slideImage} alt="imagem" title="imagem" />
              ))}
            </Carousel>
          </div>
          <div className="mt-28 Class cursor-pointer">
            <img width="100%" src="https://i.imgur.com/n2tHUM6.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
