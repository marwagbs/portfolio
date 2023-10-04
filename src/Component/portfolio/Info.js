import React from 'react'
import "./_projectCard.scss";
const Info = ({name, handelShowInfo, info, source, detail}) => {
  return (
    <div className="showInfos" onClick={handelShowInfo}>
      <div className="infosContent">
        <div className="head">
          <h2>{name}</h2>
          <div className="sourceCode">
            <a href={source} rel="noopener noreferrer" target="_blank">
              {" "}
              Code source
            </a>
          </div>
        </div>
        <p className="text">{info}</p>
        <div>
          {detail &&
            detail.map((detail) => {
              return <li className='li'>{detail.text}</li> ;
            })}
        </div>
        <div className="button return" onClick={handelShowInfo}>
          Retourner sur la page
        </div>
      </div>
    </div>
  );
}

export default Info

