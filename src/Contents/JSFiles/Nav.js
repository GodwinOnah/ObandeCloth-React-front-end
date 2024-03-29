import React,{Component} from 'react';
import {Link } from "react-router-dom";
import {Signup} from './Signup.js';
import {Login} from './Login.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../Contents/CSSFiles/Nav.css'; 

export const Nav = () => {

    return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary  sticky-top">
      <div class="container-fluid">   
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">       
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item ">
            <Link to="/Admin" class="navItem1" style={{ textDecoration: 'none',color:'' }}>Admin</Link>
            </li>

            <li class="nav-item ">
            <Link to="/" class="navItem1" style={{ textDecoration: 'none' }}>Home</Link>
            </li>
            <li class="navItem1">
            <Login/>
            </li>
            <li class="navItem1" >
            <Signup/>
            </li>
          </ul>
          <form class="d-flex navItem1" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div class="basket">
            <Link to="/Basket" >
              <div class="itemQuantity">
              <span>{0}</span>
              </div>
              <div class="basketIcon">
              <i class="bi bi-cart4"></i>
              </div>
             
            </Link>
            </div>
        </div>
      </div>
    </nav>


    );
}
