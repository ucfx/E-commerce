import React, { useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { useContext } from 'react';
import UsersProfiles from '../../components/ChatComponents/UsersProfiles';
import Chat from '../../components/ChatComponents/Chat';
import { useEffect } from 'react';
import axios from 'axios';
import NavBarè from '../../components/NavBarè';
const ChatPage = () => {

    const [users,setUsers]=useState([])


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
    const [selectedUser,setSelectedUser]=useState(null)
    const handleChangeSelectedUser=(user)=>{
        const newSelectedUser=users.find((userF)=>userF._id==user)
          setSelectedUser(newSelectedUser)
    }
    useEffect(()=>{console.log(selectedUser)},[selectedUser])
    return (
        
            
 <div className='h-screen w-full flex justify-start items-start '>
        <UsersProfiles changeSelectedUser={handleChangeSelectedUser} users={users} user={user}/>
        {selectedUser!=null?<Chat userSelected={selectedUser}/>:''}
        
    </div>
        
   
  )
}

export default ChatPage