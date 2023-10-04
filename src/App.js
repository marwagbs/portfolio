import React from 'react';
import {
 Routes,
  Route,
  
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Knowledges from "./Pages/Knowledges/Knowledges";
import Portfolio from "./Pages/Portfolio/Portfolio";
import NotFound from "./Pages/NotFound/NotFound";
const App = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Competances" element={<Knowledges />} />
      <Route path="/Portfolio" element={<Portfolio />} />
       <Route path="/Contact" element={<Contact />} />
      <Route  path="*" element={<NotFound />} />
    </Routes>
    </>
   
  );
};

export default App;