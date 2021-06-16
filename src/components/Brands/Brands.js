import React from 'react';
import './Brands.css';
import logocola from '../../img/logocola.png'
import logophilips from '../../img/logophilips.png'
import logogodrej from '../../img/logogodrej.png'
import logooppo from '../../img/logooppo.png'
import logopaypal from '../../img/logopaypal.png'
const Brands = () => {
    return (
        <div className="brands">
            <div class="small-container">
            <h2 class="title">Our Brand<span className="title-half">Partners</span></h2>
            <div class="brand-container row">
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