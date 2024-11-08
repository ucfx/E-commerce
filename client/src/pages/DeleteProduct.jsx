import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const DeleteProduct = () => {
    const navigate=useNavigate();
    const {id}=useParams();
    useEffect(()=>{
        axios
        .delete(`http://localhost:5555/product/${id}`)
        .then((response)=>{
              navigate('/admin')
        })
        .catch(()=>{

        })
    },[])
  return (
    <div>
      
    </div>
  )
}

export default DeleteProduct
