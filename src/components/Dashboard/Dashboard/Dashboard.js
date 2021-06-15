import React from 'react';
import './Dashboard.css';
const Dashboard = () => {
    
    return (
        <div>
            <div class="sidenav">
            <link to={`${url}/rendering`}>Rendering with React</link>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
                {/* <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a> */}
            </div>

            <div class="main"> 
            <h2> this li</h2>
            </div>
        </div>
    );
};

export default Dashboard;