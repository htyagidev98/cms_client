import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import './SignIn.css'
import { addContact} from '../redux/slice/ContactSlice';
import { BASE_URL } from '../../utility/Helper';
const SignIn = () => {
    const navigate= useNavigate();
    const [formData, setFormData]= useState({
        email:"",
        password:"",
    })

    const dispatch= useDispatch();

    const {email, password}= formData;

    const handleInput=(e)=>{
       const {name, value}= e.target;
       setFormData((preVal)=>{
        return{
            ...preVal,
            [name]:value
        }
       })
    }

    const handleSubmit=async(e)=>{
      e.preventDefault();

       try {
         const res= await axios.post(`${BASE_URL}/login`, formData)
         if(res.status===200){
            dispatch(addContact(res.data.responseData));
            navigate('/');
         }
       } catch (error) {
         toast.error("Invalid Credential");
      }
    }





  return (
     <div className='signin_container '>
       <div className="form_data_wrapper">
       <h2>Sign In With Blockovia</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
               <label htmlFor="email">Email</label>
               <input type="email" name='email' id='email' placeholder='Enter Email' className='form-control' autoComplete='off' onChange={handleInput} value={email}  />
            </div> 

            <div className="form-group mb-3">
               <label htmlFor="password">Password</label>
               <input type="password" name='password' id='password' onChange={handleInput} value={password} placeholder='Enter Password' className='form-control' autoComplete='off' />
            </div> 
            <div className="d-flex justify-content-between">   
            <button className='btn btn-primary mt-2'>Submit</button>
            
            <NavLink className={"nav-link"} to="/">
             <button className='btn btn-primary mt-2'>Cancel</button>
            </NavLink>
            </div>
          </form>
       </div>
     </div>
  )
}

export default SignIn