import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import productOne from '../../img/productOne.jpg';
import productTwo from '../../img/productTwo.jpg';
import productThree from '../../img/productThree.jpg';
import productFour from '../../img/productFour.jpg';
const Products = () => {
    return (
        <div className="container">
            <h2 class="title">features<span className="title-half">products</span></h2>
            <div className="card-deck d-flex justify-content-center mt-5">
                <div class="card" style={{ width: '18rem', height: '0px' }}>
                    <img src={productOne} class="card-img-top img-fluid card-img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <div className="ratings">
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star-half" />
                        </div>
                        <div className="bottom d-flex justify-content-between mt-1 pt-1">
                            <h4 className="price">$43</h4>
                            <button className="btn-buy">Buy now</button>
                        </div>
                    </div>
                </div>
                <div class="card" style={{ width: '30rem', height: '0px' }}>
                    <img src={productTwo} class="card-img-top card-img img-fluid" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <div className="ratings">
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star-half" />
                        </div>
                        <div className="bottom d-flex justify-content-between mt-1 pt-1">
                            <h4 className="price">$43</h4>
                            <button className="btn-buy">Buy now</button>
                        </div>
                    </div>
                </div>
                <div class="card" style={{ width: '18rem', height: '0px' }}>
                    <img src={productThree} class="card-img-top card-img img-fluid" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <div className="ratings">
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star-half" />
                        </div>
                        <div className="bottom d-flex justify-content-between mt-1 pt-1">
                            <h4 className="price">$43</h4>
                            <button className="btn-buy">Buy now</button>
                        </div>
                    </div>
                </div>
                <div class="card" style={{ width: '18rem', height: '0px' }}>
                    <img src={productFour} class="card-img-top card-img img-fluid" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <div className="ratings">
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star-half" />
                        </div>
                        <div className="bottom d-flex justify-content-between mt-1 pt-1">
                            <h4 className="price">$43</h4>
                            <button className="btn-buy">Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Products;