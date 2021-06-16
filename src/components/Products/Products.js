import React, { useState, useEffect } from 'react';
import './Products.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import productOne from '../../img/productOne.jpg';
const Products = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/ShowProduct`
        fetch(url)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <section id="services">
            <div className=" mt-5 ">
                <h2 class="title">Features<span className="title-half">Products</span></h2>
            </div>

            <div className="container">
                <div className="row ">
                    {
                        product.map((items) => (

                            <div className="col-md-3 col-sm-2 mb-5">
                                <div className="card-deck card-img">
                                    <div class="card">
                                        <img src={items.imgURL} class="card-img-top " style={{ height: "300px" }} alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{items.name}</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <div className="d-flex justify-content-between">
                                                <p>${items.price}</p>
                                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </section >
    );
};

export default Products;