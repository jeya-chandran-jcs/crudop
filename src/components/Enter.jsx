import React from 'react';
import { useNavigate } from 'react-router-dom';



export default function Enter() {
  const navigate=useNavigate()
  return (
    
    <div className='d-flex justify-content-center align-items-center  vh-100 border border-dark'>
      <div className='text-center'>
        <h1>Hi, welcome to my CRUD operation</h1>
        <h3>Click below to enter</h3>
        <button onClick={()=>navigate("/user")} className='btn btn-primary'>Enter</button>
      </div> 
    </div>
    
  );
}
