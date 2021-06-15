import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div class="container" id="home">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <a class="navbar-brand" href="#">Cloth<span className="logo-title">Store</span></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse  " id="navbarTogglerDemo02">
            <ul class="navbar-nav f-right ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="product">Product</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="features" tabindex="-1">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="contact" tabindex="-1">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="dashboard" tabindex="-1">Dashboard</a>
              </li>
            </ul>
          </div>
        </nav>
    </div>
    );
};

export default Navbar;