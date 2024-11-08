import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const OurStoreTypes = () => {
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

  const settings2 = {
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

  const [computers, setComputers] = useState([]);
  const [products, setProducts] = useState([]);
  const [watches, setWatches] = useState([]);

    const [phones, setPhones] = useState([]);

useEffect(()=>{
  axios
   .get("http://localhost:5555/product")
   .then((response) => {
    setProducts(response.data.data);
    console.log(products);
   
    console.log(phones)
  })
  .catch((error) => {
    console.log(error);
  });

},[])

useEffect(()=>{
  setComputers(
    products.filter((product) => product.productType === "computer")
  );

  setWatches(
    products.filter((product) => product.productType === "watch")
  );

  setPhones(
    products.filter((product) => product.productType === "phone")
  );
  console.log(watches,phones,computers,products)
  
},[products])
   

  return (
    <div className="grid lg:grid-cols-3  w-[90%] mx-auto mt-4  ">
      <div className="col-span-1  flex justify-start items-center">
        <div className="md:w-[95%] rounded-lg bg-gray-500 ">
          <Slider {...settings} className="w-full border">
            {computers.map((computer) => (
              
                <div className="flex flex-col justify-center items-center gap-y-3 pb-3" key={computer.id}>
                  <div className="flex flex-col justify-between py-4 items-center gap-y-3">
                    <img
                      src={computer.imgUrl}
                      alt=""
                      className="w-[120px] h-[120px]"
                    />
                    
                  </div>
                  
                  <div className="flex flex-col justify-center items-center gap-y-2">
                    <h1 className="text:md  lg:text-xl md:font-bold font-fontAY2">
                      {computer.name}
                    </h1>
                    <button className="md:px-4 md:py-2 text-black bg-gray-50 md:rounded-lg ">
                      Details
                    </button>
                  </div>
                </div>
           
            ))}
          </Slider>
        </div>
      </div>
      <div className="col-span-1   flex justify-center items-center">
        <div className="md:w-[95%] rounded-lg bg-gray bg-green-500">
             <Slider {...settings2} >
             {phones.map((watch) => (
              <div className="flex flex-col justify-center items-center gap-y-3 pb-3" key={watch.id}>
                <div className="flex flex-col justify-between py-4 items-center gap-y-3">
                  <img
                    src={watch.imgUrl}
                    alt=""
                    className="w-[120px] h-[120px]"
                  />
                  
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2">
                  <h1 className="text:md  lg:text-xl md:font-bold font-fontAY2">
                    {watch.name}
                  </h1>
                  <button className="md:px-4 md:py-2 text-black bg-gray-50 md:rounded-lg ">
                    Details
                  </button>
                </div>
              </div>
         
          ))}
             </Slider>
        </div>
     
      </div>
      <div className="col-span-1 flex justify-end items-center ">
      <div className="md:w-[95%] rounded-lg bg-gray bg-yellow-300">
             <Slider {...settings} >
             {watches.map((phone) => (
              
              <div className="flex flex-col justify-center items-center gap-y-3 pb-3" key={phone.id}>
                <div className="flex flex-col justify-between py-4 items-center gap-y-3">
                  <img
                    src={phone.imgUrl}
                    alt=""
                    className="w-[120px] h-[120px]"
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2">
                  <h1 className="text:md  lg:text-xl md:font-bold font-fontAY2">
                    {phone.name}
                  </h1>
                  <button className="md:px-4 md:py-2 text-black bg-gray-50 md:rounded-lg ">
                    Details
                  </button>
                </div>
                
              </div>
         
          ))}
             </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurStoreTypes;
