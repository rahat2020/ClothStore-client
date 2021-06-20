import React, { Component } from 'react'
import './HeaderMain.css';
import image1 from '../../img/image1.png';
import { Link } from 'react-router-dom';
export class HeaderMain extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center ">
                        <div className="header-title ">
                            <h1 >Give you Workout <br /> A new style</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, accusantium natus? <br /> Ipsa
                                ratione deleniti cumque.</p>
                            <div className="">
                                <Link href="" className="btn">Explore Now &#10143;</Link>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-6">
                        <div className="header-img">
                            <img className="img-fluid" src={image1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderMain
