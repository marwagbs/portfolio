import React from 'react';
import Navigation from '../../Component/Navigation/Navigation';
import ProjectList from '../../Component/portfolio/ProjectList';
import Mouse from '../../Component/Mouse/Mouse';
const Portfolio = () => {
    return (
        <div className='portfolio'>
            <Mouse/>
            <Navigation/>
            <ProjectList/>
        </div>
    );
};

export default Portfolio;