import React from 'react';
import { NavLink } from "react-router-dom";
import data from "../../Data/Navigation.json";
import './_navigation.scss';
const Navigation = () => {

    return (
        <div className='sidebar'>
           <div className='id'>
                <div className='idContent'>
                    <img src="./media/photo_ident.jpg" alt="profil"/>
                    <h3>Marwa GHEDAMSSI</h3>
            </div>
           </div>
            <div className='navigation'>
                <ul>
                    { data.sideBar.map((item, index)=>{
                        return (
                          <li key={index}>
                            <NavLink
                              exact="true"
                              to={item.SLUG}
                              className="hover"
                              style={({ isActive}) => {
                                return {
                                  color: isActive ? "#aa367c" : "white",
                                };
                              }}
                            >
                              <i className={item.icon}></i>
                              <span>{item.text}</span>
                            </NavLink>
                          </li>
                        );
                    
                })}
                    
                   
                </ul>
            </div>
            <div className='socialNetwork'>
                <ul>
                    {
                        data.socialNetwork.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <a href={item.SLUG}>
                                    <i className={item.icon}></i>
                                    </a>
                                    </li>
                            )
                        })
                    }
                </ul>
                  <div className='signature'>
                <p>Marwa GHEDAMSSI- 2023</p>
            </div>
            </div>
          
        
        </div>
    );
};

export default Navigation;