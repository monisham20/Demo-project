import React,{useState} from 'react'
import image from './image.png'

const StateHandle = () => {

   const[name,setName]=useState("hii")
   function change()  //named function
   {
    setName("moni")
   }
   function old()   //named function
   {
    setName("HII")
   }
  return (
    <div>  
    <center><h1 onMouseEnter ={change}  onMouseLeave={old}>{name}</h1>
    </center>
    </div>
  )
}

export default StateHandle