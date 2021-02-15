import React from 'react';
import {Link} from "react-router-dom";
import './navBarStyle.css';
import CartWidget from'../cartWidget/cartWidget'
import logo from '../../assets/img/logo.png';
//import { CartContext } from '../../context/cartContext'


export const NavBar = () => {

    return (
        <header>
            <nav id="navBar" className="container align-items-start">
                <div className="row justify-content-center align-items-end">
                    <div className="row col-5 mt-2 align-items-end">
                    <Link to='/'><img src={logo} height="100" alt="Wizard Icon"/></Link>
                    <Link to='/'><h1 id="navBar--title" className="col-2 m-0 pt-0">MAGIC TENT</h1></Link>   
                    </div>
                    <div className="col-5">
                        <ul id="navBar--menu">
                            <li className="navBar--item"><Link to='/' href="./#home">Home</Link></li>
                            <li className="navBar--item"><Link to='/Orders'>Orders</Link></li>
                            <li className="navBar--item deploy_trigger">
                            Categories
                                <ul className="deploy_menu">
                                    <li><Link to='/category:Potion'>Potions</Link></li>
                                    <li><Link to='/category:Staff'>Staffs</Link></li>
                                    <li><Link to='/category:Cloak'>Cloaks</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className=" col-2">
                        <Link to='/cart'>
                            <CartWidget/>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
};
