import React, { useContext,useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import { UseAuthContext } from "../hooks/useAuthContext.js";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Singup = () => {
  const context=UseAuthContext();
const navigate=useNavigate()
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [passwordConfirm,setConfirmPassword]=useState('');
  const [birthDate,setBirthDate]=useState('');
  const [errorMessage,setErrorMessage]=useState(null)
 
  const {dispatch}=context;
 
 
 
  const handleSubmit= async(e)=>{
    e.preventDefault();
    const isAdmin=false
    const userO={
      name,email,password,passwordConfirm,birthDate,isAdmin
    }
    axios
    .post('http://localhost:5555/user/singup', userO)
    .then((response) => {
       localStorage.setItem('user',JSON.stringify({email:response.data.email,name,isAdmin:response.data.isAdmin,birthDate,token:response.data.token,balance:response.data.balance,userId:response.data.userId}))
      dispatch({type:'LOGIN',payload:{email:response.data.email,name:response.data.name,isAdmin:response.data.isAdmin,birthDate:response.data.birthDate,token:response.data.token,balance:response.data.balance,userId:response.data.userId}})
      navigate('/accountActivate')
    })
    .catch( (error) => {
setErrorMessage(error.response.data.error)  
  });
    
  }

  return (
    <div className="  flex justify-center items-center  r mt-16 lg:w-3/4 mx-auto shadow-2xl max-w-4xl lg:rounded-2xl    ">
      <div className="lg:w-3/5 lg:rounded-tl-2xl lg:rounded-bl-2xl flex lg:flex-col justify-center items-center lg:gap-y-4  ">
        <h1 className="lg:text-xl font-bold text-black font-fontAY2 ">
          Create an account !
        </h1>
        <div className="lg:w-10 border-2 border-black"></div>
        <div className="flex justify-center items-center gap-x-10">
          <FaFacebook className="lg:text-3xl " />
          <MdEmail className="lg:text-3xl " />
          <FaTwitter className="lg:text-3xl " />
        </div>
        <h1 className="lg:text-lg font-bold text-gray-400 font-fontAY2 ">
          or use your email account
        </h1>
        <form onSubmit={handleSubmit} className=" flex flex-col justify-center items-center gap-y-2">
        <div className="flex flex-col justify-center items-center gap-y-4">
          <div className="flex justify-start items-center gap-x-2">
            <FaUserAlt className="lg:text-3xl text-black  " />
            <input
              type="text"
              onChange={(e)=>{setName(e.target.value)}}
              value={name}
              placeholder="Full name"
              className="lg:rounded-lg lg:py-1 border-black px-2 border-2 text-black font-bold font-fontAY2"
            />
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <MdEmail className="lg:text-3xl text-black  " />
            <input
             onChange={(e)=>{setEmail(e.target.value)}}
             value={email}
              placeholder="email"
              type="email"
              className="lg:rounded-lg lg:py-1 border-black px-2 border-2 text-black font-bold font-fontAY2"
            />
          </div>
          
          <div className="flex justify-start items-center gap-x-2">
            <RiLockPasswordFill className="lg:text-3xl text-black  " />
            <input
             onChange={(e)=>{setPassword(e.target.value)}}
             value={password}
              type="password"
              placeholder="password"
              className="lg:rounded-lg lg:py-1 border-black px-2 border-2 text-black font-bold font-fontAY2"
            />
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <RiLockPasswordFill className="lg:text-3xl text-black  " />
            <input
            onChange={(e)=>{setConfirmPassword(e.target.value)}}
            value={passwordConfirm}
              type="password"
              placeholder="confirm password"

              className="lg:rounded-lg lg:py-1 border-black px-2 border-2 text-black font-bold font-fontAY2"
            />
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <BsCalendar2DateFill className="lg:text-3xl text-black  " />
            <input
               onChange={(e)=>{setBirthDate(e.target.value)}}
               value={birthDate}
              type="date"
              className="lg:rounded-lg lg:py-1 border-black lg:px-8 border-2 text-black font-bold font-fontAY2"
            />
          </div>
        </div>
        <button className="lg:px-12 hover:bg-green-400 py-2 text-white font-bold bg-green-500 lg:rounded-lg">
          Sign up
        </button>
        <h1 className="lg:text-xl text-red1 font-fontAY2  ">{errorMessage}</h1>
        </form>
        <div className="absolute top-10 left-10 flex justify-between items-center">
         <IoMdArrowRoundBack className="lg:text-2xl text-green-500 font-bold font-fontAY2" />

        <Link to={'/'} className='lg:text-2xl text-green-500 font-bold font-fontAY2'>
           Home
        </Link>
        </div>
      </div>
      <div className="  lg:w-2/5 lg:rounded-tr-2xl lg:rounded-br-2xl bg-green-500  lg:py-36 lg:px-12 flex flex-col justify-center items-center gap-y-4">
        <h1 className="lg:text-xl font-bold text-white font-fontAY2">
          Hello Friend !
        </h1>
        <div className="lg:w-10 border-2 border-white"></div>
        <div className="flex flex-col justify-center items-center  text-center">
          <h1 className="lg:text-lg font-bold text-white font-fontAY2">
            {" "}
            If you want tp purchase from our store{" "}
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center  text-center">
          <h1 className="lg:text-lg font-bold text-white font-fontAY2">
            {" "}
            You must create an account
          </h1>
        </div>
        <Link to={'/Singin'} className="bg-green-500 border-2 lg:rounded-2xl px-3 py-2 text-white font-bold font-fontAY2 lg:hover:bg-white lg:hover:text-green-500 lg:hover:border-green-500 "type="submit">
          Sing in
        </Link>
      
      </div>
    </div>
  );
};

export default Singup;
