import React, { useEffect } from 'react';
import './Brands.css';
import logocola from '../../img/logocola.png'
import logophilips from '../../img/logophilips.png'
import logogodrej from '../../img/logogodrej.png'
import logooppo from '../../img/logooppo.png'
import logopaypal from '../../img/logopaypal.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Brands = () => {
    useEffect(() => {
        AOS.init({ offset: 120, duration: 2000 });
      })
    return (
        <div className="brands">
            <div class="small-container">
            <h2 data-aos="fade-up" class="title">Our Brand<span className="title-half">Partners</span></h2>
            <div data-aos="fade-down" class="brand-container row">
                <div class="col-md-2.5 img-container">
                    <img src={logocola} className="img-fluid" alt=""/>
                </div>
                <div class="col-md-2.5 img-container">
                    <img src={logophilips} className="img-fluid" alt="" />
                </div>
                <div class="col-md-2.5 img-container">
                    <img src={logogodrej}className="img-fluid"  alt=""/>
                </div>
                <div class="col-md-2.5 img-container">
                    <img src={logooppo} className="img-fluid" alt=""/>
                </div>
                <div class="col-md-2.5 img-container">
                    <img src={logopaypal} className="img-fluid" alt=""/>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Brands;