import React, { useContext, useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const Singin = () => {
  const [email, setName] = useState("");
  const [password, setPassword] = useState("");
  const {user,dispatch}=useContext(AuthContext);

  const [displayError,setDisplayError]=useState(false);
  const [errorD,setError]=useState('h')
  

  const navigate=useNavigate()

  const handleSingIn=(e)=>{
e.preventDefault()
  axios
  .post('http://localhost:5555/user/login',{email,password})
  .then((response)=>{
    localStorage.setItem('user',JSON.stringify({email:response.data.email,name:response.data.name,isAdmin:response.data.isAdmin,birthDate:response.data.birthDate,token:response.data.token,balance:response.data.balance,userId:response.data.userId}))

      dispatch({type:'LOGIN',payload:{email:response.data.email,name:response.data.name,isAdmin:response.data.isAdmin,birthDate:response.data.birthDate,balance:response.data.balance,userId:response.data.userId}})
     console.log(user)
      if(response.data.isAdmin){
             navigate('/admin')
      }else{
        navigate('/')

      }
    })
  .catch((error)=>{
    setDisplayError(true)
setError(error.response.data)
if(error.response.data.error=='check your email and activate your account'){
  navigate('/accountActivate')
}
  })
  }
  return (
    <div className=" flex justify-center items-center  r mt-16 lg:w-3/4 mx-auto shadow-2xl max-w-4xl rounded-2xl  ">
      <form onSubmit={handleSingIn} className="lg:w-3/5 ounded-tl-2xl rounded-bl-2xl flex lg:flex-col justify-center items-center gap-y-6 ">
        <h1 className="lg:text-xl font-bold text-black font-fontAY2 ">
          Sing in to your account !
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
        <div className="flex flex-col justify-center items-center gap-y-4">
          <div className="flex justify-start items-center gap-x-2">
            <MdEmail className="lg:text-3xl text-black  " />
            <input
            
            onChange={(e)=>{setName(e.target.value),setDisplayError(false)}}
            value={email}

              type="email"
              className="lg:rounded-lg lg:py-1 border-black px-2 border-2 text-black font-bold font-fontAY2"
            />
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <RiLockPasswordFill className="lg:text-3xl text-black  " />
            <input
              
            onChange={(e)=>{setPassword(e.target.value),setDisplayError(false)}}
            value={password}
              type="password"
              className="lg:rounded-lg lg:py-1 border-black px-2 border-2 text-black font-bold font-fontAY2"
            />
          </div>
        </div>
        {
          displayError ?  <p className="text-lg text-red1 font-fontAY2">
          {errorD.error}
            </p>  :''
        }
       
        <button type="submit" className="lg:px-12 hover:bg-green-400 py-2 text-white font-bold bg-green-500 lg:rounded-lg">
          Sing in
        </button>
        <div className="absolute top-10 left-10 flex justify-between items-center">
         <IoMdArrowRoundBack className="lg:text-2xl text-green-500 font-bold font-fontAY2" />

        <Link to={'/'} className='lg:text-2xl text-green-500 font-bold font-fontAY2'>
           Home
        </Link>
        </div>
        
      </form>
      <div className="lg:w-2/5 rounded-tr-2xl rounded-br-2xl bg-green-500 py-36 px-12 flex flex-col justify-center items-center gap-y-4">
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
        <Link to={'/Singup'} className="bg-green-500 border-2 lg:rounded-2xl px-3 py-2 text-white font-bold font-fontAY2 lg:hover:bg-white lg:hover:text-green-500 lg:hover:border-green-500 ">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Singin;
