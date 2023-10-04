import React from 'react';
import Navigation from '../../Component/Navigation/Navigation';
import FormContact from '../../Component/ContactForm/FormContact';
import './_contact.scss'
import Mouse from '../../Component/Mouse/Mouse';
const Contact = () => {
    return (
       
        <div className='contact'>
            <Mouse/>
         <Navigation/>
          <div className='contactContent'>
            
           <FormContact/> 
           </div>
        </div>
    );
};

export default Contact;