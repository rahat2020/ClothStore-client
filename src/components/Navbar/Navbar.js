import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const navStyle ={ 
    color: 'tomato'
  }
  const home ={ 
    backgroundColor: '#5d63dc',
    color:'white',
    padding:'5px',
    borderRadius:'5px',
  }
  
  return (

    <div class="container" id="home">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <Link class="navbar-brand" to="/home">Cloth<span className="logo-title">Store</span></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse  " id="navbarTogglerDemo02">
          <ul class="navbar-nav f-right ml-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/" style={home}>Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" style={navStyle} to="/product">Product</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" style={navStyle}  to="/features" tabindex="-1">Features</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" style={navStyle} to="/contact" tabindex="-1">Contact</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" style={navStyle} to="/dashboard/addReview" tabindex="-1">Dashboard</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" style={navStyle} to="/login" tabindex="-1">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;