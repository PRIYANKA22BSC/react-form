import React from 'react';
import { useState } from 'react';
const Form = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const[confirm,setConfirm]=useState("")


     const submitHandler=(e)=>{
        e.preventDefault();
        console.log("submitted")
        
     }
    return(
        <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col justify-center align-middle gap-4 p-7  h-auto w-96 rounded-lg shadow-xl mx-auto mt-12'>
            
            <h2 className=' text-center font-bold text-3xl'>Create an Account</h2>
            <input onChange={(e)=>{setName(e.target.value)}}  type="text" placeholder='Enter your name' className='outline-blue-800 h-12 border-solid border-2 rounded-lg border-gray-300 p-2'/>
            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Enter your email' className='outline-blue-800 border-2 rounded-lg border-gray-300 h-12 p-2'/>
            <input onChange={(e)=>{setPass(e.target.value)}} type="password" placeholder='Enter Password' className='outline-blue-800 border-2 rounded-lg border-gray-300 h-12 p-2 '/>
            <input onChange={(e)=>{setConfirm(e.target.value)}} type="password" placeholder='Confirm Password' className='outline-blue-800 border-2 rounded-lg border-gray-300 h-12 p-2'/>
            <button className='bg-blue-700 h-12 rounded-lg text-white'>Submit</button>
            <p className='text-center text-sm'>By registering,you agree to our <span className='text-blue-800'>Terms & Conditions </span>and <span className='text-blue-800'>Privacy Policy</span>.</p>
           
        </form>
    )
}



export default Form;