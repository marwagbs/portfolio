import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import data from '../../Data/Portfolio.json'
import "./_projectCard.scss";
const ProjectList = () => {
  const [selectedRadio, setSelectedRadio]=useState("javascript")
 const handelRadio=(event)=>{
  let radio=event.target.value;
  
  setSelectedRadio(radio);
 }
 console.log(selectedRadio)
  return (
    <div className='portfolioContent'>
      <ul className='radioDisplay'>
        {data.radio.map(item=>{
          return (
            <li key={item.id}>
              <input
                type="radio"
                name="radio"
                checked={item.value === selectedRadio}
                value={item.value}
                className="hover"
                id={item.value}
                onChange={handelRadio}
              />
              <label htmlFor={item.value} className="label hover">
                {item.value}
              </label>
            </li>
          );
          
        })}
      </ul>
       <div className='projects'>
     {
      data.portfolioData.filter(item=> item.languages.includes(selectedRadio))
      .map(item=>{
        return(
           <ProjectCard name={item.name} languages={item.languages}  languagesIcons={item.languagesIcons}  source={item.source}  info={item.info}  picture={item.picture}  key={item.id}  detail={item.detail}/>
        )
      })
     }
       </div>
    </div>
  )
}

export default ProjectList
