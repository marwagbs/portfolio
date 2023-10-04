import React from 'react';
import Navigation from '../../Component/Navigation/Navigation';
import Skills from "../../Component/Skills/Skills";
import Framworks from '../../Component/Skills/Framworks';
import Versions from '../../Component/Skills/Versions';
import "./_knowledges.scss"
import Environement from '../../Component/Skills/Environement';
import CMS from '../../Component/Skills/CMS';
import Mouse from '../../Component/Mouse/Mouse';

const Knowledges = () => {
   
    return (
        <div className='knowledges'>
             <Mouse/>
            <Navigation/>
             {/* <h2>Compétances</h2> */}
            <div className='knowledgesContent'>
            
                <Skills/>
                <Framworks/>
                <Versions/>
               <Environement/>
               <CMS/>
                 
                 
                
            </div>
         
        </div>
    );
};

export default Knowledges;