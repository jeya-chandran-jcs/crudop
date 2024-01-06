import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from "axios"
import {API} from "../global.jsx"
import {useNavigate} from 'react-router-dom'

import EditModal from './EditModal.jsx'

const Mycontext=createContext()

export const Globalcontext=()=>{
    return useContext(Mycontext)
}
export default function User({children}) {
    const [data,setData]=useState([])
    const getUserData=()=>{
        axios.get(`${API}`)
        .then(res=>setData(res.data))
    }
   
    useEffect(()=>{
        getUserData()
    },[])
  return (
    <Mycontext.Provider value={{data,setData,getUserData}}>
    <div>
        {children}
        {/* <Table /> */}
    </div>
    </Mycontext.Provider>
  )
}

export const Table=()=>{
    const {data,getUserData}=Globalcontext()
    const [edit,setedit]=useState(false)
    const [send ,setsend]=useState(null)
    // const [editdata,seteditdata]=useState({item:null,index:null})
    const navigate=useNavigate()
    
  
    const handleDelete = (id) => {
        const newid=parseInt(id)
        axios.delete(`${API}/${newid}`)
            
            .then(()=>getUserData())
            .catch(err => {
                console.log("Error deleting item", err);
            });
    };

    const handleedit=(item)=>{
        setsend(item)
        setedit(!edit)
        console.log("edit is clicked")
    }
    
    return(
   
        <div className='container-fluid text-center'>
            <h1 className='text-center bg-black text-info p-3'>Company details</h1>
            <button className='btn btn-warning m-3' onClick={()=>navigate("/user/create")}>CREATE</button>
            <table className='table table-striped table-bordered'>
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">username</th>
                        <th scope="col"> email</th>
                        <th scope="col">phone</th>
                        <th scope="col">company</th>
                        <th scope="col">website</th>
                        <th scope="col">address</th>
                        <th scope='col'>option</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index)=>(
                        <tr key={index}>
                            <td > {item?.name}</td>
                            <td> {item?.username}</td>
                            <td> {item?.email}</td>
                            <td> {item?.phone}</td>
                            <td>{item?.company?.name}</td>
                            <td> {item?.website}</td>
                            <td> {`${item?.address?.street}`}</td>
                            <td className='btn btn-danger' onClick={()=>handleDelete(item.id)}>delete</td>
                            <td className='btn btn-secondary ml-2' onClick={()=>handleedit(item)}>edit</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
            {edit ? <EditModal  data={send} setedit={setedit} getUserData={getUserData}/> : ""}
            
        </div>
   
    )
}
