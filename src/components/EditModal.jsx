import React, { useEffect, useState } from 'react'
import { API } from '../global';
import axios from 'axios';

export default function EditModal({data,setedit,getUserData}) {
    

    const [name, setname] = useState("");
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [company, setcompany] = useState("");
    const [website, setwebsite] = useState("");
    const [address, setaddress] = useState("");
    
 
    const putData=async ()=>{
        const newdata={
            name:name,
            username:username,
            email:email,
            phone:phone,
            company:{
                name:company,
            },
            website:website,
            address:{
                street:address
            }
        }
        const response=await axios.put(`${API}/${data.id}`,newdata,{
            headers:{
                "content-type":"application/json",
                accept:"application/json"
            }
        })
        getUserData()
        setedit(false)
    }

    useEffect(()=>{
        setaddress(data?.address?.street || '');
        setcompany(data?.company?.name || '');
        setemail(data.email)
        setname(data.name)
        setphone(data.phone)
        setusername(data.username)
        setwebsite(data.website)
    },[data])

    

  return (
    <div className='container'>
        
        <div className='modal show fade ' style={{display:"block"}}>
            <div className='modal-dialog modal-dialog-scrollable ' style={{overflowY:"auto"}}>
                <div className='modal-content'>
                  
                    <div className="modal-header">
                        <h3 className='modal-title'>Edit</h3>
                        <button type='button' className='btn-close' data-bs-dismiss="modal"
                        onClick={()=>setedit(false)} ></button>
                    </div>
                  
                    <div className='modal-body'>
                  
                        <form>
                            <div className='form-group '>
                                <label htmlFor='name' className='form-label  fw-bold'>name</label>
                                <input type="text" className='form-control'  id="name" placeholder='Enter your name'
                                 value={name} onChange={(e)=>setname(e.target.value)}/>
                            </div>

                            <div className='form-group '>
                                <label htmlFor='username' className='form-label  fw-bold'>username</label>
                                <input type="text" className='form-control'  id="username" placeholder='Enter your username'
                                value={username} onChange={(e)=>setusername(e.target.value)}/>
                            </div>

                            <div className='form-group mb-3'>
                                <label htmlFor='email' className='form-label fw-bold'>email</label>
                                <input type="text" className='form-control'  id="email" placeholder='Enter your email'
                                value={email }    onChange={(e)=>setemail(e.target.value)}/>
                            </div>

                            <div className='form-group mb-3'>
                                <label htmlFor='phone' className='form-label fw-bold'>Phone no</label>
                                <input type='text' className='form-control'  id='phone' placeholder='Enter your ph no'
                                value={phone } onChange={(e)=>setphone(e.target.value)}/>
                            </div>

                            <div className='form-group mb-3'>
                                <label htmlFor='website' className='form-label fw-bold'>website</label>
                                <input type='text' className='form-control'  id='website' placeholder='Enter your website'
                                value={website} onChange={(e)=>setwebsite(e.target.value)}/>
                            </div>

                            <div className='form-group mb-3'>
                                <label htmlFor='company' className='form-label fw-bold'>company</label>
                                <input type='text' className='form-control'  id='company' placeholder='Enter your company'
                                value={company } onChange={(e)=>setcompany(e.target.value)}/>
                            </div>
                            
                            <div className='form-group mb-3'>
                                <label htmlFor='address' className='form-label fw-bold'>address</label>
                                <input type='text' className='form-control'  id='address' placeholder='Enter your address'
                                value={address} onChange={(e)=>setaddress(e.target.value)}/>
                            </div>
                        </form>
                    </div>
                    <div className='modal-footer'>
                    <button className='btn btn-primary' onClick={putData}> save</button>
                        <button className='btn btn-secondary' data-bs-dismiss="modal" > close</button>
                    </div>
                </div>

            </div>
        </div>
        
         
</div>
  )
}
