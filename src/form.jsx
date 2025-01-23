import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
const Form = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const[confirm,setConfirm]=useState("")
    const[error,setError]=useState("")


     const submitHandler=(e)=>{
        e.preventDefault();
        if((pass.length<8) || !pass.match(/[a-z]/) || !pass.match(/[A-Z]/) || !pass.match(/[0-9]/) || !pass.match(/[!@#$%&*]/)){
            setError("Password length should be 8 characters and it must contain at least one uppercase,one lower case, one number and one special character"); 
            return;
        }
        if(pass!==confirm){
            setError("Password is not matched with Confirm Password.");
            return;
        }

        toast.success('Successfully submitted!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
       
            });
        setName("")
        setEmail("")
        setPass("")
        setConfirm("")
        setError("")
        
     }
    return(
        <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col justify-center align-middle gap-4 p-7  h-auto w-96 rounded-lg shadow-xl mx-auto mt-12'>
            <h2 className=' text-center font-bold text-3xl'>Create an Account</h2>
            <input value={name} onChange={(e)=>{setName(e.target.value)}}  type="text" placeholder='Enter your name' required className='outline-blue-800 h-12 border-solid border-2 rounded-lg border-gray-300 p-2'/>
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Enter your email'required className='outline-blue-800 border-2 rounded-lg border-gray-300 h-12 p-2'/>
            <input  value={pass}onChange={(e)=>{setPass(e.target.value)}} type="password" placeholder='Enter Password'required className='outline-blue-800 border-2 rounded-lg border-gray-300 h-12 p-2 '/>
            <input  value={confirm} onChange={(e)=>{setConfirm(e.target.value)}} type="password" placeholder='Confirm Password'required className='outline-blue-800 border-2 rounded-lg border-gray-300 h-12 p-2'/>
            {error &&
              <p className='text-center text-red-600 text-xs'>{error}</p>
            }
            <button className='bg-blue-700 h-12 rounded-lg text-white'>Submit</button>
            <p className='text-center text-sm'>By registering,you agree to our <span className='text-blue-800'>Terms & Conditions </span>and <span className='text-blue-800'>Privacy Policy</span>.</p>
            <ToastContainer></ToastContainer>
        </form>
     
    )
}
export default Form;