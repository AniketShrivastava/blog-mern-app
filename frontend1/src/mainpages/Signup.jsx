import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { Header } from '../component/Header';

export const Signup = () => {
    const[inputVal,setInputValue] = useState({
        "username":"",
        "useremail":"",
        "password":""

    });
    const inputHandler = (event)=>{
        setInputValue({...inputVal,[event.target.name]:event.target.value});
    }
    const Signupuser = async(event)=>{
        event.preventDefault();
        // console.log(inputVal);
       let result = await axios.post('http://localhost:4000/signup',inputVal);
       if(result){
             toast.success("success");
       }
       else{
              toast.success("Error");
       }

    }
  return (<>
  <Header/>
    <div className="container">
    <ToastContainer/>
        <h1 className='text-center'>Signup</h1>
        <div className="row">
            <div className="col-sm-6 mx-auto">
                <div className="card p-4">
                  <form action="" onSubmit={Signupuser}>
                    <div className="mt-3">
                        <label htmlFor="">UserName</label>
                        <input type="text" name='name' className='form-control' onChange={inputHandler} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="">UserEmail</label>
                        <input type="email" name='email' className='form-control' onChange={inputHandler} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="">Password</label>
                        <input type="password" name='password' className='form-control' onChange={inputHandler} />
                    </div>
                    <div className="mt-3">
                        <input type="submit"  className='btn btn-info' value='Signup' onChange={inputHandler} />
                    </div>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
  </>
  )
}
