import React, { useState } from 'react'
import { UserNvabar } from './UserNvabar'
import axios from 'axios';

export const Add_blog = () => {
    const [blogvalu,setblogValu]=useState({
        "title":"",
        "category":"",
        "description":"",
        "image":"",
    });
   const inputHandler = (event)=>{
        setblogValu({...blogvalu,[event.target.value]:event.target.name});
   }
   const fileHandler = (event)=>{
    setblogValu({...blogvalu,[event.target.name]:event.target.files[0]})
   }
   const Addblog = async (event)=>{
            event.preventDefault();
           const formData = new FormData();
           formData.append("title", blogvalu.title);
           formData.append("category", blogvalu.category);
           formData.append("description", blogvalu.description);
           formData.append("blogImg", blogvalu.image,blogvalu.image.name);
        //    console.log(formData)
           let result = await axios.post('http://localhost:4000/addblog', formData);


   } 
  return (
    <>
    <UserNvabar/>
    <div className="container">
    <h1 className='text-center'>Add Blog</h1>
        <div className="row">
            <div className="col-sm-6 mx-auto">
                <div className="card p-4">
                  <form action="" onSubmit={Addblog}>
                    
                    <div className="mt-3">
                        <label htmlFor="">Title</label>
                        <input type="text" name='title' className='form-control' onChange={inputHandler} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="">Category</label>
                        <input type="text" name='category' className='form-control' onChange={inputHandler} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="">Description</label>
                        <input type="text" name='description' className='form-control' onChange={inputHandler} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="">Upload Imgae</label>
                        <input type="file" name='image' className='form-control' onChange={fileHandler} />
                    </div>
                    <div className="mt-3">
                        <input type="submit"  className='btn btn-info' value='Add Blog' onChange={inputHandler} />
                    </div>
                    </form>
                </div>
                
            </div>
        </div>

    </div>
    </>
  )
}
