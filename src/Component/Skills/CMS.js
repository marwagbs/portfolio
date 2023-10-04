import React from 'react'
import  data from "../../Data/Knowledges.json";
import "./_skills.scss"

const CMS = () => {
  return (
    <div className='cms'>  
          <h3>CMS</h3>
        {data.cms.map(item=>{
       return(
           <div key={item.id}>
          <li>{item.value}</li>
          </div>
       )
      })} 
     
    </div>
     
  )
}

export default CMS
