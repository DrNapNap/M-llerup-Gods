import React from 'react';
import logo from '../logo.png';
import { Link, withRouter } from 'react-router-dom';
const header = () => {

    return (
        <div className="container ">
          <div className="row">
          <div className="m-auto col-12 col-lg-3 ">
        <a className="navbar-brand img-fluid" href="#/"><img className="min" src={logo} /></a></div></div>
            <nav className=" navbar-expand-md navbar-light ul">
      <div className="container ">
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarResponsive">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="row">
        
        <div className="" id="navbarResponsive">
          <ul className="navbar-nav ml-auto d-flex flex-wrap m-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Velkommen</Link>
            </li>
             <li className="nav-item">
              <Link to="/Events" className="nav-link">Verdensballetten</Link>
            </li>
            <li className="nav-item ">
              <Link to="/Shop" className="nav-link">Events og mødefaciliteter</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contactus" className="nav-link">Hvad siger vores gæster</Link>
            </li>

            <li className="nav-item ">
              <Link to="/Contactus" className="nav-link">Om Møllerup Gods</Link>
            </li>
            <li className="nav-item ">
              <Link to="/Contactus" className="nav-link">Kontakt os</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contactus" className="nav-link">Webshop</Link>
            </li>
          </ul>
        </div>
      </div>
</div>
    </nav>

        </div>
    )
}

export default header