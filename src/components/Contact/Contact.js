import React from 'react';
import './Contact.css';
import Navbar from '../Navbar/Navbar';
import contactUS from '../../img/contactUS.svg';

export default function Contact() {
    return (
        <div class="container">
            <Navbar />
            <section class="container mt-3">
                <div class="d-flex justify-content-center align-items-center mb-4">
                    <h1 data-aos="fade-up" className="contact-title">Get in touch</h1>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="contact-img w-100 h-50">
                            <img data-aos="fade-up" src={contactUS} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div data-aos="fade-up" className="row h-100">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Name" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Email" aria-label="Last name" />
                            </div>
                            <div className="col-12 mt-2">
                                <textarea type="text" rows="4" className="form-control" placeholder="write your message" aria-label="your message" />
                            </div>
                            <div className="col-12 mt-2">
                                <button type="submit" className="form-control btnSubmit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
