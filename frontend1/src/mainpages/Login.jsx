import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../component/Header'
import axios from 'axios'


export const Login = () => {
  const navigate = useNavigate()
  const [inputVal,setInputValue]= useState({
    "email":"",
    "password":""
  })
  const inputHandler = (event)=>{
     setInputValue({...inputVal,[event.target.value]:event.target.name})
  }
  const Loginuser =async (event)=>{
  event.preventDefault()
  let result = await axios.post("http://localhost:4000/login", inputVal);
  if(result){
    navigate("/Userdeshboard");
       alert("success")
  }
  }
  return (
    <>
    <Header/>
    <div className="container">
        <h1 className='text-center'>Login</h1>
        <div className="row">
            <div className="col-sm-6 mx-auto">
                <div className="card p-4">
                  <form action="" onSubmit={Loginuser}>
                    
                    <div className="mt-3">
                        <label htmlFor="">Email</label>
                        <input type="email" name='email' className='form-control' onChange={inputHandler} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="">Password</label>
                        <input type="password" name='password' className='form-control' onChange={inputHandler} />
                    </div>
                    <div className="mt-3">
                        <input type="submit"  className='btn btn-info' value='Login' onChange={inputHandler} />
                    </div>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
                      </>
  )
}
