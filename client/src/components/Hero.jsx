import React, { useEffect, useState,useContext } from "react";
import Slider from "react-slick";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    //autoplay:true
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };


 
  

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5555/product")
      .then((response) => {
        
        setProducts(response.data.data);
      
      })
      .catch((error) => {
        console.log(error);
       
      });
  }, []);
  return (
    <>
      <div className="bg-red1  w-[90%]  md:h-[380px] mx-auto relative hidden   md:flex  justify-start items-center py-14  lg:py-12  px-[40px] rounded-lg mt-5 ">
        <Slider {...settings} className=" w-full">
          {products.map((product) => (
            <div key={product.id} className="relative w-full font-fontAY2 ">
              <div className=" flex justify-start items-start flex-col gap-y-5">
                <h1 className="text-md lg:text-lg  font-bold text-black">{product.name}</h1>
                <h1 className="text-xl  lg:text-3xl font-bold text-gray-200">
                  {product.productType}
                </h1>
                <h2 className="text-4xl lg:text-6xl font-bold text-white">
                  {product.description}
                </h2>
                <button className="rounded-xl py-2 px-3 text-white font-bold bg-gray-800">
                  Buy Now
                </button>
                <img
                  className="     absolute md:right-6 md:w-[200px] md:h-[200px]"
                  src={product.imgUrl}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-[90%] mx-auto mt-5 md:hidden rounded-xl ">
        <Slider {...settings} className="w-full relative ">
          {products.map((product) => (
            <div key={product.id} className="bg-red1  py-20 rounded-lg">
              <div className="flex flex-row justify-between items-center relative  ">
                <div className="flex flex-col justify-center items-start  gap-y-5  w-full px-4  ">
                  <h1 className="font-fontAY2 font-bold text-xl text-white">
                    {product.name}
                  </h1>
                  <h1 className="font-fontAY2 font-bold text-xl text-white">
                    {product.productType}
                  </h1>
                  <h1 className="font-fontAY2 font-bold text-xl text-white">
                    {product.description}
                  </h1>
                  <button className="px-3 py-2 text-white font-bold bg-gray-600 rounded-xl">
                    Buy Now
                  </button>
                </div>
                <img src={product.imgUrl} alt="younes" className=" w-[75px] h-[75px] absolute right-3 " />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Hero;
