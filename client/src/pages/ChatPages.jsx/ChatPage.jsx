import React, { useRef, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { useContext } from 'react';
import UsersProfiles from '../../components/ChatComponents/UsersProfiles';
import Chat from '../../components/ChatComponents/Chat';
import { useEffect } from 'react';
import axios from 'axios';
import { io } from "socket.io-client";

const ChatPage = () => {

    const [users,setUsers]=useState([])
   const socket=useRef()

    useEffect(()=>{
        axios
        .get('http://localhost:5555/user')
        .then((response)=>{
            setUsers(response.data.data);
        })
        .catch((error)=>{
           console.log(error)
        })
    },[])
    const {user,dispatch}=useContext(AuthContext);

    useEffect(()=>{
        if(user != null){
            socket.current=io('http://localhost:5555')
            socket.current.emit('add-user',user.userId)
        }
    },[user])
    const [selectedUser,setSelectedUser]=useState(null)
    const handleChangeSelectedUser=(user)=>{
        const newSelectedUser=users.find((userF)=>userF._id==user)
          setSelectedUser(newSelectedUser)
    }
    return (
        
            
 <div className='h-screen w-full flex justify-start items-start  '>
        <UsersProfiles changeSelectedUser={handleChangeSelectedUser} users={users} user={user}/>
        {selectedUser!=null?<Chat userSelected={selectedUser} socket={socket}/>:''}
        
    </div>
        
   
  )
}

export default ChatPage