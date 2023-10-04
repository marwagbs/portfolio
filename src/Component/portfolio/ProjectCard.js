import React, { useState } from 'react';
import "./_projectCard.scss";
import Info from './Info';
const ProjectCard = ({name, languages,languagesIcons, source, info, picture, detail}) => {
const[showInfo, setShowInfo]=useState(false);
const handelShowInfo=()=>{
    setShowInfo(!showInfo)
    console.log("hello")
}
  return (
    <div className='project'> 
  <div className='icon' >
      {languagesIcons && languagesIcons.map(icon=>{
        return(
        
            <i className={icon} key={icon}/>
         
         
        )
      })}
       </div>
       <h3>{name}</h3>
       <img src={picture} alt="project" onClick={handelShowInfo}/>
       <span className='info'>
       <i className="fa-solid fa-circle-plus" onClick={handelShowInfo}></i>
       </span>


       {
        showInfo && 
            <Info name={name} info={info} handelShowInfo= {handelShowInfo} source={source} detail={detail}/>
       
       }
    </div>
  )
}

export default ProjectCard
