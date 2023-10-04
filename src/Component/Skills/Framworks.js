 import React from 'react'
 import ProgressBar from"./ProgressBar";
import  data from "../../Data/Knowledges.json";
import "./_skills.scss"
 const Framworks = () => {
   return (
 
     
      <div className='frame'>
       <ProgressBar 
        languages={data.frameworks}
        className="frameworkDisplay"
        title="Frameworks & bibiliothèques"
      />
      </div>
  
   )
 }
 
 export default Framworks
 