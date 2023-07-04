import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Logo from "../assets/Zenith.png";
import people from "../assets/user.svg";
import './home.css';
import './Login.css';
export default function Login() {
    return (
        <>
            <Navbar></Navbar>

            <div className="container">
                <div className="form">
                    <div className="header">
                        <div className="logo">
                            <h2>ZENITH</h2>
                        </div>
                        <select name="language" className="language">
                            <option value="1" selected>English</option>
                            <option value="2">Spanish</option>
                            <option value="3">Hindi</option>
                            <option value="4">Chinese</option>
                            <option value="5">Japanese</option>
                        </select>
                    </div>
                    <div className="form_box">
                        <h1>Hi there</h1>
                        <p>Welcome to ZENITH Community Dashboard</p>
                        <form action="">
                            <input type="email" name="email" className="input_box" placeholder="Your Email" />
                            <input type="password" name="password" className="input_box" placeholder="Password" />
                            <div className="right_start"><a href="#">Forgot password</a></div>
                            <button type="submit" className="action_button">Log in</button>
                        </form>
                        <p>Don't have an account? <Link to='/register'>Sign up</Link></p>
                    </div>
                </div>
                <div className="card">
                    <div className="card_action">
                        <div className="links">
                            <Link to='/'>Take a tour</Link>
                            <button className="button_outlined" onClick="">Explore</button>
                        </div>
                        <div className="community_item">
                            <img src={people} height="40rem" alt="Pepole" />
                            <p>1500+ members</p>
                            <div>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="quotes">
                        <h1>"</h1>
                        <h1>Consistency is the key to success.</h1>
                        <div className="quotes_option">
                            <p>3rd January</p>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
}