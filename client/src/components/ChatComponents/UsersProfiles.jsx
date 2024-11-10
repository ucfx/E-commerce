import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import '../../CssFolder/Css.css'
import Logo from '../../assets/img/logo2.png'
import { Link } from 'react-router-dom';


const UsersProfiles = ({user,users,changeSelectedUser}) => {
    const [userDisplayed,setUserDisplayed]=useState([])
    const [selectedUser,setSelectedUser]=useState(1)
const [serchedUsers,setSerchedUsers]=useState(null)

    
    useEffect(()=>{
    setUserDisplayed(users)
    },[users])

    useEffect(()=>{
    if(serchedUsers==null){
        setUserDisplayed(users)
    }else{
   const newUsers=users.filter((user)=> user.name.includes(serchedUsers))
   setUserDisplayed(newUsers)
    }
    },[serchedUsers])


    


    const displayUsersF=userDisplayed.map((user,index)=>{
       
           if(user._id==selectedUser){
            return ''
           }else{
            if(user.isVerified){
                return <div onClick={()=>{setSelectedUser(user._id);changeSelectedUser(user._id)}} key={index} className='cursor-pointer flex justify-start items-center gap-x-2'>
                <div className= {`flex flex-col justify-center items-center rounded-full py-2 px-2 bg-white `}>
                      <FaUser className='text-gray-900' />
                </div>
                <div className='flex flex-col justify-start items-start'>
                    <p className='text-white text-md font-semibold'>{user.name}</p>
                    <p className='text-gray-500 text-sm font-semibold'>Send mesage to {user.name}</p>
    
                </div>
          </div>
            }else{
           return ''
            }
           
           }
           
        
          
    })
    const displaySelectedUser=users.map((user,index)=>{
       if(user._id==selectedUser){
        return  <div className='cursor-pointer flex justify-start items-center gap-x-2'>
            
        <div className= {`flex flex-col justify-center items-center rounded-full py-2 px-2 bg-white border-[3px] border-blue-500`}>
                         <FaUser className='text-gray-900' />
                   </div>
                   <div className='flex flex-col justify-start items-start'>
                       <p className='text-white text-md font-semibold'>{user.name}</p>
                       <p className='text-gray-500 text-sm font-semibold'>Send mesage to {user.name}</p>
       
                   </div>
               </div>
       }else{
        return ''
       }
    })
       
        
      
    
  return (
    <div className='h-screen w-[23%] bg-gray-900  pt-[20px] pl-[20px] '>
        <Link to={'/'} className='flex justify-start items-center gap-x-1 left-2 top-1 pb-10'>
           <img src={Logo} className=" w-[65px] h-[65px]"/>
           <Link  src={Logo} className="text-xl text-white font-semibold  ">AY-STORE</Link>
        </Link>
        
       <p className='text-white font-semibold  pb-[10px]'>{user.name}</p> 
       <div className='w-full flex justify-start items-center gap-x-2'>
          <input onChange={(e)=>{setSerchedUsers(e.target.value)}} value={serchedUsers} type="text" className="rounded-full bg-white py-1 px-3 font-semibold" />
         <div className="flex flex-col justify-center iteme-center cursor-pointer bg-blue-500 rounded-full py-2 px-2">
              <IoMdAdd className='text-white font-bold text-xl' />
         </div>
       </div>
       <div className=' h-[80%]  pt-5 flex flex-col justify-start items-start gap-y-3 scrollbar-custom'>
          {displaySelectedUser}
          {displayUsersF}
       </div>
       

    </div>
  )
}

export default UsersProfiles