import React from 'react';
import {Link} from "react-router-dom";
import './navBarStyle.css';
import Cart from'../cartWidget/cartWidget'
import logo from '../../assets/img/logo.png';



export const NavBar = () => {

    return (
        <header>
            <nav id="navBar" className="container align-items-start">
                <div className="row justify-content-center align-items-end">
                    <div className="row col-5 mt-2 align-items-end">
                        <img src={logo} height="100" alt="Wizard Icon"/>
                        <h1 id="navBar--title" className="col-2 m-0 pt-0">MAGIC TENT</h1>   
                    </div>
                    <div className="col-4">
                        <ul id="navBar--menu">
                        <li><Link to='/' href="./#home">Home</Link></li>
                            <li><a href="./#shop">Shop</a></li>
                            <li><a href="./#categories">Support</a></li>
                        </ul>
                    </div>
                    <div className="col-1">
                        <Cart/>
                    </div>
                </div>
            </nav>
        </header>
    )
};
