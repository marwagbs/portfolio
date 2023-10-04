 import React from 'react'
import  data from "../../Data/Knowledges.json";
import "./_skills.scss"
 const Environement = () => {
   return (
    
      <div className='environement'>
      <h3>Environnement</h3>
       { (data.environnement).map((item)=>{
         return(
              <div key={item.id}>
               <li>{item.value}</li>
               </div>
         )
        
       })}
  
      </div>
   )
 }
 
 export default Environement
 