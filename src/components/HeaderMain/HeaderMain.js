import React, { useEffect } from 'react'
import './HeaderMain.css';
import image1 from '../../img/image1.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const HeaderMain = ()=> {
    useEffect(() => {
        AOS.init({ offset: 120, duration: 2000});
    })
        return (
            <div>
                <div  className="row data-aos=fade-up w-100">
                    <div className="col-md-6 d-flex align-items-center ">
                        <div className="header-title ">
                            <h1 data-aos="fade-up">Give you Workout <br /> A new style</h1>
                            <p data-aos="fade-down">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, accusantium natus? <br /> Ipsa
                                ratione deleniti cumque.</p>
                            <div className="">
                                <Link href="" className="btn">Explore Now &#10143;</Link>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className=" col-md-6">
                        <div className="header-img">
                            <img className="img-fluid" src={image1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default HeaderMain
