import React from 'react'

const ProgressBar = ({languages, title, className}) => {
    
  return (
    <div className={className}>
      <h3>{title}</h3>
      <div className='years'>
        <span> Années d'experience:</span>
        <span> 1an</span>
        <span> 2an</span>
      </div>
        <div>
           {languages && languages.map((item)=>{
            let xpYears=2;
            let progressBar=item.xp/xpYears*100 + '%'
            return(
                <div key={item.id} className='languagesList'>
                     <li>{item.value}</li>
                     <div className="container">
                     <div className='progressBar' style={{width:progressBar}} ></div>
                    </div>
                </div>
            )
           })}

            
        </div>
    </div>
  )
}

export default ProgressBar
