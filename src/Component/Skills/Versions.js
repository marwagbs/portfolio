import React from 'react'
import  data from "../../Data/Knowledges.json";
import "./_skills.scss"
const Versions = () => {
  return (
  
    <div className='version'>
    
    <h3>Versions & paquets </h3>
      {data.versions.map(item=>{
       return(
           <div key={item.id}>
          <li>{item.value}</li>
          </div>
       )
      })}
     
    </div>
  )
}

export default Versions
