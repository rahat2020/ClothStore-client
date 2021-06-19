import React, { useState, useEffect } from 'react';
import './Testimonial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons'
const Testimonial = () => {
    const [comment, setComment] = useState([])
    console.log(comment)
    useEffect(() => {
        const url = `http://localhost:5000/review`
        fetch(url)
            .then((response) => response.json())
            .then(data => setComment(data))
    }, [])
    return (
        <div className="container">
            <h2 class="title">Testi<span className="title-half">Monial</span></h2>

            <div className="row">
                {
                    comment.map((review) => (
                        <div className="col-md-4 shadow-sm">
                            <div class="card  testimonial-style">
                                <FontAwesomeIcon icon={faQuoteLeft} className="test-icon mt-3 mb-3" />
                                <p className="test-description">{review.comment}</p>
                                <div class="start-container mb-2">
                                    <FontAwesomeIcon icon={faStar} className="test-start" />
                                    <FontAwesomeIcon icon={faStar} className="test-start" />
                                    <FontAwesomeIcon icon={faStar} className="test-start" />
                                    <FontAwesomeIcon icon={faStar} className="test-start" />
                                    <FontAwesomeIcon icon={faStar} className="test-start" />
                                </div>
                                <img src={review.imgURL} className="test-img" alt="" />
                                <h4 className="text-center test-title">{review.name}</h4>
                                <h6  className="text-center mb-3 test-designation">{review.designation}</h6>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Testimonial;