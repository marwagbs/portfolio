import React from 'react'
import { useEffect } from 'react'
import "./_mouse.scss"
const Mouse=()=> {


    useEffect(()=>{
        const cursor=document.querySelector(".cursor")
        window.addEventListener('mousemove',(e)=>{
            cursor.style.top=e.y + "px"
            cursor.style.left = e.x + "px";
            
        })
        document.querySelectorAll(".hover").forEach((link)=>{
            link.addEventListener("mouseover",()=>{
              cursor.classList.add("hovered")
            });
             link.addEventListener("mouseleave",()=>{
              cursor.style.translation=".3s ease-out"
              cursor.classList.remove("hovered")
            })
        
        })
        
    },[])
  return (
    <div>
      <span className='cursor'></span>
    </div>
  )
}

export default Mouse
