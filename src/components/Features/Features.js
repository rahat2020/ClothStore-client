import React, { useEffect } from 'react';
import './Features.css';
import categoryOne from '../../img/categoryOne.jpg';
import categoryTwo from '../../img/categoryTwo.jpg';
import categoryThree from '../../img/categoryThree.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Features = () => {
    useEffect(() => {
        AOS.init({ offset: 120, duration: 2000});
    })
    return (
        <div className="row p-5 mt-5 feature-style">
            <div className="col-md-4 img-style">
                <img className="img-fluid" data-aos="zoom-in-up" style={{ width: '300px', height: '300px' }} src={categoryOne} alt=""></img>
            </div>
            <div className="col-md-4 img-style">
                <img className="img-fluid" data-aos="zoom-in-up"style={{ width: '300px', height: '300px' }} src={categoryTwo} alt=""></img>
            </div>
            <div className="col-md-4 img-style">
                <img className="img-fluid" data-aos="zoom-in-up" style={{ width: '300px', height: '300px' }} src={categoryThree} alt=""></img>
            </div>
        </div>
    );
};

export default Features;