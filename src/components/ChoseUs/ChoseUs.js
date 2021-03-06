import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import choseOne from "../../img/choseOne.jpg";
import "./ChoseUs.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const ChoseUs = () => {
  // adding animations for card
  useEffect(() => {
    AOS.init({ offset: 120, duration: 2000 });
  })
  return (
    <section>
      <div className="div-container w-100">
        <h2 data-aos="fade-up" class="title">Chose<span className="title-half">Us</span></h2>

        <div className="row">
          <div className="col-md-6 col-chose-left ">
            <img data-aos="fade-up" className="img-responsive" src={choseOne} alt="" />
          </div>
          <div data-aos="fade-down" className="col-md-6 text-style ">
            <h1 className="text-title">Why<span className="text-title-half">Chose</span>us</h1>
            <hr />
            <p className="text-para">
              <FontAwesomeIcon icon={faQuoteLeft} className="quote" />
              A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean</p>
            <div className="btn-group">
              <button className="btn mt-3 ">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoseUs;
