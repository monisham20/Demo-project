import React,{useState} from 'react'
import image from './image.png'
import monisha from './image1.png'

const StateHandle1 = () => {

   const[image,setImage]=useState(image)
   function change()
   {
    setImage(monisha)
   }
   function old()
   {
    setImage(image)
   }
  return (
    <div>  
    <center><img src={image} onMouseEnter ={change}  onMouseLeave={old} ></img>
    </center>
    </div>
  )
}

export default StateHandle1