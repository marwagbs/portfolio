import React ,{useState}from 'react'
import ProgressBar from"./ProgressBar";
import  data from "../../Data/Knowledges.json";
import "./_skills.scss"
const Skills = () => {

   
  return (
      <div className='languages'>
   
           <ProgressBar 
        languages={data.frontEnd}
        className="languageDisplay"
        title="FrontEnd"
      />
       <ProgressBar 
        languages={data.backEnd}
        className="languageDisplay2"
        title="BackEnd"
      />
  

    </div>
  )
}

export default Skills
