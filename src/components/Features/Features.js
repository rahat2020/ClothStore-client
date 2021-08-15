import React, { useEffect, useState } from 'react';
import './Features.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Data from '../../Data/Data';
import { Link } from 'react-router-dom';
const Features = () => {
    useEffect(() => {
        AOS.init({ offset: 120, duration: 2000 });
    })
    const [items, setItems] = useState([])
    console.log(items)
    useEffect(() => {
        setItems(Data)
    }, [])
    return (
        <section className="mt-5 container">
            <h2 data-aos="fade-up" class="title">Latest<span className="title-half">Item</span></h2>
            <div className="row">
                {
                    items.map(item => (

                        <div data-aos="fade-down" className="col-md-4 col-all feature-style">
                            <img className="img-fluid image" src={item.image} alt="img" />

                            <div className="middle">
                                <div className="d-flex justify-content-between">
                                    <p className="text">{item.name}</p>
                                    <p className="text">price: {item.price}</p>
                                </div>
                                <Link to=""><button className="buy-btn mt-3">Buy Now</button></Link>

                            </div>
                        </div>
                    ))
                }
            </div>
        </section>

    );
};

export default Features;