import axios from "axios";
import React, { act, useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ProductContext } from "../Context/ProductContext";
import { Link } from "react-router-dom";
import { MdOutlineOutbond, MdOutlineVerifiedUser } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Basket = ({handleChangeI}) => {
  const { user, dispatch } = useContext(AuthContext);
  const [cartProduct, setCartProducts] = useState([]);

  const [pQuantity, setPQuantity] = useState(1);
  const navigate=useNavigate();
  const {productContext,productDispatch,productListDispatch,product}=useContext(ProductContext);

  const saveCartProduct = () => {
    axios
      .post('http://localhost:5555/purchase/byCart', {
        cartProduct,
        quantities:boxes,
        userId: user.userId,
        products:productContext,
        total:total
      })
      .then((response) => {
        dispatch({type:'incrementBalance',payload:{balance:response.data.newBalance}})
        cartProduct.map((cart,index)=>{
          const cartPoduct=productContext.find((pr)=>pr._id == cart.productId)
           productListDispatch({type:'updateOne',payload:{product:cartPoduct,quantity:boxes[index]}})
        })
        

      })
      .catch((error) => {
        console.log(error);
      });
      

     

  };

  const handleDeleteCart = (p, index) => {
    const newCart = cartProduct.filter((product) => {
      return product._id != p._id;
    });
    const newBox = boxes.filter((box, i) => {
      return i !== index;
    });
    setBoxes(newBox);
    setCartProducts(newCart);
    axios
      .delete(`http://localhost:5555/cart/${p._id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5555/cart/${user.userId}`)
      .then((response) => {
        setCartProducts(response.data.cartProducts);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [boxes, setBoxes] = useState(Array(100).fill(1));
  const handleChangeBox = (i, operation) => {
    const newBox = [...boxes];
    const product = productContext.find(
      (p) => p._id == cartProduct[i].productId
    );

    switch (operation) {
      case "+":
        if (boxes[i] < product.quantity) {
          newBox[i] = newBox[i] + 1;

          setBoxes(newBox);
          setTotal(total + product.price);
        }

        break;
      case "-":
        if (newBox[i] > 1) {
          newBox[i] = newBox[i] - 1;
          setBoxes(newBox);
          setTotal(total - product.price);
        }

        break;
    }
  };
  useEffect(()=>{console.log(productContext)},[productContext])
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cartProduct.reduce((acc, p) => {
      const productPrice = productContext.find((pr) => pr._id === p.productId);
      return acc + productPrice.price;
    }, 0); // Initial value for the accumulator (total)
    setTotal(newTotal);
  }, [cartProduct, productContext]);

  const displayCartProduct = cartProduct.map((p, i) => {
    const product = productContext.find((pr) => pr._id == p.productId);

    return (
      <div key={i} className="grid grid-cols-4   py-1 pl-2 border-b  ">
        <div className="cols-span-1 flex justify-start items-center gap-x-3">
          <img src={product.imgUrl} alt="" className="w-[75px] h-[75px]" />
          <p>{product.name}</p>
        </div>
        <div className="cols-span-1  flex justify-center items-center ">
          <div className="w-1/2 flex justify-center gap-x-4 items-center rounded-xl border hover:bg-gray-200">
            <p
              className="font-bold text-xl cursor-pointer "
              onClick={() => {
                handleChangeBox(i, "-");
              }}
            >
              -
            </p>
            <p className="font-bold text-xl ">{boxes[i]}</p>
            <button
              className="font-bold text-xl cursor-pointer"
              onClick={() => {
                handleChangeBox(i, "+");
              }}
            >
              +
            </button>
          </div>
        </div>
        <p className="cols-span-1 flex justify-center items-center text-2xl">
          {product.price * boxes[i]} $
        </p>
        <p className="cols-span-1 flex justify-center items-center">
          <MdDeleteForever
            onClick={() => {
              handleDeleteCart(p, i);
            }}
            className="text-3xl cursor-pointer hover:text-yellow-500"
          />
        </p>
      </div>
    );
  });
  return (
    <div className=" px-2 mt-20 w-full   absolute top-18 pt-4 ">
      <p className="text-3xl font-bold font-fontAY2 mt-5 mb-5 pl-4 flex justify-start items-center gap-x-2">
        <BsCart4 className="text-3xl text-yellow-500" />
        Shopping Cart
      </p>
      <div className="flex justify-start items-center w-full gap-x-4 pl-4  ">
        <div className="border rounded-xl shadow-lg py-3  w-2/3 min-h-[465px] pl-2">
          <div className="grid grid-cols-4 pb-3 border-b mb-2">
            <p className="col-span-1 flex justify-center items-center text-xl font-bold">
              Product
            </p>
            <p className="col-span-1 flex justify-center items-center text-xl font-bold">
              Quantity
            </p>
            <p className="col-span-1 flex justify-center items-center text-xl font-bold">
              Total
            </p>
            <p className="col-span-1 flex justify-center items-center text-xl font-bold">
              Action
            </p>
          </div>
          {cartProduct.length > 0 ? displayCartProduct : ""}
        </div>
        <div className="w-1/4 border rounded-xl shadow-lg pt-6 px-3 pb-10 ">
          <p className="font-bold text-xl mb-4">Order Summury</p>
          <div className="flex justify-between items-center py-2 mb-2">
            <input type="text" className="border rounded-lg w-2/3" />
            <input type="text" className="border rounded-lg w-1/4" />
          </div>
          <div className="pb-3 border-b mb-3">
            <div className="flex justify-between items-center px-2 font-bold mb-3">
              <p>Sub Total</p>
              <p>{total} $</p>
            </div>
            <div className="flex justify-between items-center px-2 font-bold mb-3  ">
              <p>discount</p>
              <p>- {(total * 10) / 100}$</p>
            </div>
            <div className="flex justify-between items-center px-2 font-bold mb-3 ">
              <p>Delivery free</p>
              <p>- 50 $</p>
            </div>
          </div>
          <div className="px-2 flex justify-between items-center text-2xl font-bold pb-4">
            <p className="text-xl">Total</p>
            <p>{total} $</p>
          </div>
          <div className="flex justify-start px-2 items-center gap-x-5 text-gray-700 pb-5">
            <MdOutlineVerifiedUser className="text-xl " />
            <p className="w-4/5 text-sm">
              90% of users repeated their purchase, due to the discounts and
              quality of the products.{" "}
            </p>
          </div>
          <div className="w-full flex justify-center items-center pt-4 ">
            <button className="py-2 w-3/4 rounded-lg bg-black text-white text-lg font-bold hover:bg-gray-600">
              Checkout Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full py-1 pl-5 flex judtify-start items-center">
        <button
          className="bg-red1 text-white font-bold rounded-lg py-2 px-6 mt-4 "
          onClick={
            saveCartProduct}
        >
          Buy by {total} $
        </button>
      </div>
    </div>
  );
};

export default Basket;
