import React, { useState, useEffect } from 'react';
import './Products.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Products = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const url = `https://young-falls-22201.herokuapp.com/ShowProduct`
        fetch(url)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [])
    console.log(product)

    // adding animations for card
    useEffect(() => {
        AOS.init({ offset: 120, duration: 2000});
    })
    return (
        <section id="services w-100">
            <div className=" mt-5 ">
                <h2 data-aos="fade-up"  class="title">Features<span className="title-half">Products</span></h2>
            </div>

            <div className="container">
                <div className="row ">
                    {
                        product.map((items) => (

                            <div data-aos="fade-down" className="col-md-3 col-sm-2 mb-5">
                                <div className="card-deck card-img">
                                    <div className="card card-style">
                                        <img src={items.imgURL} class="card-img-top " style={{ height: "230px" }} alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{items.name}</h5>
                                            <p className="card-text">Some quick example text to build.</p>
                                            <div className="ratings">
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                            <div className="d-flex justify-content-between mt-2">
                                                <h5 className="card-price">${items.price}</h5>
                                                <Link to={`/checkout/${items._id}`}><button href="#" className="btn-buy">Buy Now &#10143;</button></Link>
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