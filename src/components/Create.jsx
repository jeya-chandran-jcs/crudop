import React, {  useState } from 'react'
import { API } from '../global'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Globalcontext } from './User'

export default function Create() {
    const {data,setData}=Globalcontext()

    const [name, setname] = useState('');
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [company, setcompany] = useState('');
    const [website, setwebsite] = useState('');
    const [address, setaddress] = useState('');
    

    const navigate=useNavigate()

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const newdata={
            name:name,
            username:username,
            email:email,
            phone:phone,
            company:{name:company},
            website:website,
            address:{street:address}
        }
        console.log("post address",newdata)
       
        try{
            const response = await axios.post(`${API}`,newdata,{
                headers:{
                    "content-type":"application/json",
                    accept:"application/json"
                }
            })
            navigate("/user")
        }
        catch(err){
            console.log("error while posting",err)
        }
       setData([...data,newdata])


    }
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <div className='form-group mb-3'>
                <label htmlFor='name' className='form-label  fw-bold'>name</label>
                <input type="text" value={name} className='form-control' id="name" placeholder='Enter your name' 
                onChange={e=>setname(e.target.value)}/>
            </div>

            <div className='form-group mb-3'>
                <label htmlFor='username' className='form-label  fw-bold'>username</label>
                <input type="text" value={username} className='form-control' id="username" placeholder='Enter your username' 
                onChange={e=>setusername(e.target.value)}/>
            </div>
            <div className='form-group mb-3'>
                <label htmlFor='email' className='form-label fw-bold'>email</label>
                <input type="text" className='form-control' id="email" placeholder='Enter your email'
                onChange={e=>setemail(e.target.value)}/>
            </div>

            <div className='form-group mb-3'>
                <label htmlFor='phone' className='form-label fw-bold'>Phone no</label>
                <input type='text' className='form-control' id='phone' placeholder='Enter your ph no'
                onChange={e=>setphone(e.target.value)}/>
            </div>

            <div className='form-group mb-3'>
                <label htmlFor='company' className='form-label fw-bold'>company</label>
                <input type='text' className='form-control' id='company' placeholder='Enter your company'
                onChange={e=>setcompany(e.target.value)}/>
            </div>

            <div className='form-group mb-3'>
                <label htmlFor='website' className='form-label fw-bold'>website</label>
                <input type='text' className='form-control' id='website' placeholder='Enter your website'
                onChange={e=>setwebsite(e.target.value)}/>
            </div>
            
            <div className='form-group mb-3'>
                <label htmlFor='address' className='form-label fw-bold'>address</label>
                <input type='text' className='form-control' id='address' placeholder='Enter your address city,street,zipcode'
                onChange={e=>setaddress(e.target.value)}/>
            </div>

            <button type="submit" className='btn btn-success moveleft' >Submit</button>
        </form>
    </div>
  )
}
