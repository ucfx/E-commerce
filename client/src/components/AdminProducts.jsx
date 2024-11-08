import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaLaptop } from "react-icons/fa";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const AdminProducts = ({ product, products }) => {
  const [productDisplay, setProductDisplay] = useState(product);
  const [add, setAdd] = useState(product);
  const [deletProduct, setDeletProduct] = useState(false);

  const navigate = useNavigate();

  const Laptops = products.filter((prod) => prod.productType == "computer");
  const Phones = products.filter((prod) => prod.productType == "phone");
  const Watches = products.filter((prod) => prod.productType == "watch");
  const Cameras = products.filter((prod) => prod.productType == "camera");
  useEffect(() => {
    setProductDisplay(product);
    switch (product) {
      case 0:
        setProductType(Laptops);
        break;
      case 1:
        setProductType(Phones);
        break;
      case 2:
        setProductType(Watches);
        break;
      case 3:
        setProductType(Cameras);
        break;
      default:
        setProductType(Laptops);
    }
    setAdd(product);
  }, [product]);
  useEffect(() => {}, [productDisplay]);
  const [productType, setProductType] = useState(() => {
    switch (productDisplay) {
      case 0:
        return Laptops;
        break;
      case 1:
        return Phones;
        break;
      case 2:
        return Watches;
        break;
      case 3:
        return Cameras;
        break;
      default:
        return Laptops;
    }
  });
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % productType.length);
  };
  const previous = () => {
    if (index == 0) {
      setIndex(productType.length - 1);
    } else {
      setIndex((index - 1) % productType.length);
    }
  };

  const deleteProduct = () => {
    axios
      .delete(`http://localhost:5555/product/${productType[index]._id}`)
      .then((response) => {
        setDeletProduct(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="px-4 py-5 w-[70%] mx-auto ">
      <div className="w-full flex justify-between items-center gap-x-5 mb-5  ">
        <div
          onClick={() => {
            setProductDisplay(0);
            setProductType(Laptops);
            setIndex(0);
            setAdd(0);
          }}
          className={`flex cursor-pointer group px-5 py-3 justify-center items-center gap-x-2 border rounded-lg hover:border-red1 ${
            productDisplay == 0 ? "border-red1" : "border-gray-600"
          } `}
        >
          <FaLaptop
            className={`text-lg font-bold font-fontAY2 group-hover:text-red1 ${
              productDisplay == 0 ? "text-red1" : "text-gray-600"
            }`}
          />
          <h1
            className={`text-lg font-bold font-fontAY2 group-hover:text-red1 ${
              productDisplay == 0 ? "text-red1" : "text-gray-600"
            }`}
          >
            Laptops
          </h1>
        </div>
        <div
          onClick={() => {
            setProductDisplay(1);
            setProductType(Phones);
            setIndex(0);
            setAdd(1);
          }}
          className={`flex cursor-pointer group px-5 py-3 justify-center items-center gap-x-2 border rounded-lg hover:border-red1 ${
            productDisplay == 1 ? "border-red1" : "border-gray-600"
          } `}
        >
          <FaLaptop
            className={`text-lg font-bold font-fontAY2 group-hover:text-red1  ${
              productDisplay == 1 ? "text-red1" : "text-gray-600"
            }`}
          />
          <h1
            className={`text-lg font-bold font-fontAY2 group-hover:text-red1  ${
              productDisplay == 1 ? "text-red1" : "text-gray-600"
            }`}
          >
            Phones
          </h1>
        </div>
        <div
          onClick={() => {
            setProductDisplay(2);
            setProductType(Watches);
            setIndex(0);
            setAdd(2);
          }}
          className={`flex cursor-pointer group px-5 py-3 justify-center items-center gap-x-2 border rounded-lg hover:border-red1 ${
            productDisplay == 2 ? "border-red1" : "border-gray-600"
          } `}
        >
          <FaLaptop
            className={`text-lg font-bold font-fontAY2 group-hover:text-red1 ${
              productDisplay == 2 ? "text-red1" : "text-gray-600"
            }`}
          />
          <h1
            className={`text-lg font-bold font-fontAY2 group-hover:text-red1 ${
              productDisplay == 2 ? "text-red1" : "text-gray-600"
            }`}
          >
            Watches
          </h1>
        </div>
        <div
          onClick={() => {
            setProductDisplay(3);
            setProductType(Cameras);
            setIndex(0);
            setAdd(3);
          }}
          className={`flex cursor-pointer group px-5 py-3 justify-center items-center gap-x-2 border rounded-lg hover:border-red1 ${
            productDisplay == 3 ? "border-red1" : "border-gray-600"
          } `}
        >
          <FaLaptop
            className={`text-lg font-bold font-fontAY2 group-hover:text-red1 ${
              productDisplay == 3 ? "text-red1" : "text-gray-600"
            }`}
          />
          <h1
            className={`text-lg font-bold font-fontAY2 group-hover:text-red1 ${
              productDisplay == 3 ? "text-red1" : "text-gray-600"
            }`}
          >
            Cameras
          </h1>
        </div>
      </div>
      <div>
      <Link to={'/product/new'}  className="mt-4 mb-5 px-2 py-2 font-bold font-fontAY2 text-white text-lg rounded-lg bg-green-600 ">
       Add new product
      </Link>
      </div>
      
      {productType.length > 0 ? (
        <div className=" relative mt-5 flex flex-col gap-y-9 justify-between items-center px-3 py-3 border border-gray-800 rounded-lg">
           <div className="absolute left-3 top-3 flex justify-center items-center gap-x-4">
            <button className="px-2 py-2 border border-blue-500 text-blue-500 rounded-lg font-bold">quantity {productType[index].quantity}</button>
            <button className="px-2 py-2 border border-blue-500 text-blue-500 rounded-lg font-bold">{productType[index].price} $</button>

           </div>
          <img
            className={`w-[300px] h-[300px] `}
            src={productType[index].imgUrl}
            alt=""
          />
          <div
            className={`w-[500px] h-[200px] flex flex-col  items-center py-2 justify-center gap-y-7 ${
              deletProduct ? "block" : "hidden"
            }`}
          >
            <h1 className="text-red1 font-fontAY2 font-bold text-xl">
              Are you sure to delete this product
            </h1>
            <div className="flex py-2 justify-center items-center gap-x-4">
              <Link
                to={`/product/delete/${productType[index]._id}`}
                className="px-4 py-2 text-white rounded-lg bg-red1 font-bold font-fontAY2"
              >
                Delete
              </Link>
              <button
                onClick={() => {
                  setDeletProduct(false);
                }}
                className="px-4 py-2 text-white rounded-lg bg-blue-400 font-bold font-fontAY2"
              >
                Cancel
              </button>
            </div>
          </div>
          <div className="w-full  px-5 flex justify-between items-center">
            <GrPrevious
              className="text-xl text-gray-600 cursor-pointer hover:text-black"
              onClick={previous}
            />
            <h1 className="text-xl font-bold font-fontAY2 text-black">
              {productType[index].name}
            </h1>

            <GrNext
              className="text-xl text-gray-600 cursor-pointer hover:text-black"
              onClick={next}
            />
          </div>
          <div className="w-[400px] flex justify-center items-center ">
            <h1 className="text-sm text-gray-800 font-bold font-fontAY2">
              {productType[index].description}
            </h1>
          </div>
          <div className="w-full flex justify-start items-center gap-x-3">
            
            <Link to={`product/update/${productType[index]._id}`} className="px-2 py-2 text-white text-lg font-bold font-fontAY2 rounded-lg bg-yellow-400">
              Update
            </Link>
            <button
              onClick={() => {
                setDeletProduct(true);
              }}
              className="px-2 py-2 text-white text-lg font-bold font-fontAY2 rounded-lg bg-red-400"
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div className="mx-auto w-full py-6 flex justify-center items-center border border-gray-800 mt-10 rounded-lg ">
          <h1 className="mx-auto font-bold font-fontAY2 text-black text-xl ">
            No product found
          </h1>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
