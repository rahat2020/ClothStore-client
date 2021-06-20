import React from 'react';
import './Offer.css';
import exclusive from '../../img/exclusive.png'
import { Link } from 'react-router-dom';
const Offer = () => {
    return (
        <div className="offer">
             <h2 className="title">Black<span className="title-half">Friday</span></h2>
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid offer-image" src={exclusive} alt="" />
                </div>
                <div className="col-md-6 text-offer">
                    <p className="half-title">Exclusively Available on ClothStore</p>
                    <h1 className="offer-title">Smart Brand 4</h1>
                    <small className="offer-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sequi tenetur magni
                        provident</small> <br />
                    <Link href="" className="btn buy-now mt-3" >Buy Now &#10143;</Link>
                </div>
            </div>
        </div>
    );
};

export default Offer;