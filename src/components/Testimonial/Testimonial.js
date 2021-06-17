import React, { useState, useEffect } from 'react';
import './Testimonial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import userOne from '../../img/userOne.png';
import userTwo from '../../img/userTwo.png';
import userThree from '../../img/userThree.png';
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
        <div>
            {
                comment.map((review) => (
                    <div class="container testi-container">
                        <h2 class="title">Testi<span className="title-half">Monial</span></h2>
                        <div id="demo" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="carousel-caption">
                                        <p>  <FontAwesomeIcon icon={faQuoteLeft} className="quote" /> {review.comment}  <FontAwesomeIcon icon={faQuoteRight} className="quote" /> </p> <img src={review.imgURL} alt="" />
                                        <div id="image-caption">{review.name}</div>
                                        <div id="caption">{review.designation}</div>
                                    </div>
                                </div>


                            </div> <a class="carousel-control-prev" href="#demo" data-slide="prev">   <FontAwesomeIcon icon={faArrowRight} className="arrow" /> </a>
                            <a class="carousel-control-next" href="#demo" data-slide="next">  <FontAwesomeIcon icon={faArrowLeft} className="arrow" /> </a>
                        </div>
                    </div>

                ))
            }

        </div>
    );
};

export default Testimonial;