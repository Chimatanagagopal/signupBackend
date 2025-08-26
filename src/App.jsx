
import { useState } from 'react'

import './App.css'
import axios from 'axios'


function App() {
  const[data,updatedData]=useState({name:"",email:"",password:""})
  const handlechange=(e)=>{
   const {name,value}=e.target
   updatedData((prev)=>({
    ...prev,[name]:value
   }))
  }
  const handleSubmit=async (e)=>{
     e.preventDefault();
    try{
      const res=await axios.post(import.meta.env.VITE_API, data)
      console.log(res.data)
      console.log("data succesfully added")
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name</label>
        <input type="text" name="name" id="name" onChange={handlechange} value={data.name}/><br></br>
      <label htmlFor="email">email</label>
        <input type="email" name="email"  onChange={handlechange} value={data.email}/><br></br>
      <label htmlFor="password">password</label>
        <input type="text" name="password"  onChange={handlechange} value={data.password}/><br></br>
        <button value="Submit">Submit</button> 
    </form>
    
    </>
  )
}

export default App
