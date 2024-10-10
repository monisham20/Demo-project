import React,{useState} from 'react'
import image from './image.png'
import monisha from './image1.png'

const StateHandle3 = () => {

   const[image,setImage]=useState(image)
   
   const change=function(){
    setImage(monisha)
   }
  return (
    <div>  
    <center><img src={image} onMouseEnter ={change}  />
    </div>
  )
}

export default StateHandle3