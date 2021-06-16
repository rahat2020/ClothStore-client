import React from 'react';
import './Testimonial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import userOne from '../../img/userOne.png';
import userTwo from '../../img/userTwo.png';
import userThree from '../../img/userThree.png';
const Testimonial = () => {

    return (
        <div>
            <div class="container testi-container">
                <h2 class="title">Testi<span className="title-half">Monial</span></h2>
                <div id="demo" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="carousel-caption">
                                <p>  <FontAwesomeIcon icon={faQuoteLeft} className="quote"/>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen.  <FontAwesomeIcon icon={faQuoteRight} className="quote" /> </p> <img src={userOne} alt="" />
                                <div id="image-caption">Nick Doe</div>
                                <div id="caption">CEO ALEXA-FORT PVT</div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="carousel-caption">
                                <p>  <FontAwesomeIcon icon={faQuoteLeft} className="quote" />If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen.  <FontAwesomeIcon icon={faQuoteRight} className="quote" /> </p>  <img src={userTwo} class="img-fluid" alt="" />
                                <div id="image-caption">Cromption Greves</div>
                                <div id="caption">CEO ALEXA-FORT PVT</div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="carousel-caption">
                                <p>  <FontAwesomeIcon icon={faQuoteLeft} className="quote" />If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen.  <FontAwesomeIcon icon={faQuoteRight} className="quote" /> </p>  <img src={userThree} class="img-fluid" alt="" />
                                <div id="image-caption">Harry Mon</div>
                                <div id="caption">CEO ALEXA-FORT PVT</div>
                            </div>
                        </div>
                    </div> <a class="carousel-control-prev" href="#demo" data-slide="prev">   <FontAwesomeIcon icon={faArrowRight} className="arrow" /> </a>
                    <a class="carousel-control-next" href="#demo" data-slide="next">  <FontAwesomeIcon icon={faArrowLeft} className="arrow" /> </a>
                </div>
            </div>


        </div>
    );
};

export default Testimonial;