import React from 'react'
import  data from "../../Data/Knowledges.json";
import "./_skills.scss"
const BDD = () => {
  return (
    <div className='bdd'>
          <h3>Base de données</h3>
        {data.bdd.map(item=>{
       return(
           <div key={item.id}>
          <li>{item.value}</li>
          </div>
       )
      })} 
     
    </div>
     
  )
}

export default BDD
