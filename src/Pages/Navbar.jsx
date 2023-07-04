import React, { Fragment, useState } from 'react';
import './home.css';
import { Link, Outlet } from 'react-router-dom';
import Logo from "../assets/Zenith.png";

const Menu = () => (
    <Fragment>
        <p><a href="#">What is Zenith</a></p>
        <p><a href="#">Zenith 4.O</a></p>
        <p><a href="#">Case Studies</a></p>
        <p><a href="#">Library</a></p>
        <p><Link to='/search'>Search Candidate</Link></p>
    </Fragment>
)

export default function Navbar() {
    return (
        <>
            <div className='zenith_navbar'>
                <div className='zenith_navbar_links'>
                    <div className='zenith_navbar_links_logo'>
                        <img src={Logo} alt="ZENITH" />
                        <p><Link to='/'>Home</Link></p>
                        <p className='links_550'><Link to='/login'>Sign in</Link></p>
                        <p className='links_550'><Link to='/register'>Sign up</Link></p>
                    </div>
                    <div className='zenith_navbar_links_container'>
                        <Menu></Menu>
                        <div className='zenith_navbar_menu_container_sign'>
                            <p><Link to='/login'>Sign in</Link></p>
                            <p className="sign_btn"><Link to='/register'>Sign up</Link></p>
                        </div>
                    </div>
                </div>
                <div className='zenith_navbar_menu'>
                    <div className='zenith_navbar_menu_1050_sign'>
                        <p><Link to='/login'>Sign in</Link></p>
                        <p className="sign_btn"><Link to='/register'>Sign up</Link></p>
                    </div>
                </div>
            </div>
            <div className="empty_box"></div>
            <Outlet />
        </>
    );
}