import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import people from "../assets/user.svg";
import './home.css';
import './Register.css';
import kualalumpur from '../assets/kualalumpur.jpg';
import hamburg from '../assets/hamburg.jpg';
import spain from '../assets/spain.jpg';
import newyork from '../assets/newyork.jpg';
import arch1 from '../assets/arch1.jpg';
import arch2 from '../assets/arch2.jpg';
export default function Register() {
    const forward = ">";
    const backward = "<";
    const arr = [kualalumpur, hamburg, spain, newyork, arch1, arch2];
    const l = arr.length;
    const [gallery_image, setGallery_image] = useState(0);
    const pressedL = () => {
        (gallery_image > 0) ?
            setGallery_image(gallery_image - 1)
            :
            setGallery_image(l - 1);
    }
    const pressedR = () => {
        (gallery_image < l - 1) ?
            setGallery_image(gallery_image + 1)
            :
            setGallery_image(0);
    }
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
                            <option value="2" >Spanish</option>
                            <option value="3" >Hindi</option>
                            <option value="4" >Chinese</option>
                            <option value="5" >Japanese</option>
                        </select>
                    </div>
                    <div className="form_box">
                        <h2>Welcome to ZENITH Community</h2>
                        <form action="">
                            <input type="text" name="name" className="input_box" placeholder="Name" />
                            <input type="number" name="age" className="input_box" placeholder="Age" />
                            <input type="tel" name="phone" className="input_box" placeholder="Phone No." />
                            <input type="email" name="email" className="input_box" placeholder="Your Email" />
                            <input type="password" name="password" className="input_box" placeholder="Password" />
                            <input type="password" name="cpassword" className="input_box" placeholder="Confirm Password" />
                            <button type="submit" className="action_button">Sign up</button>
                        </form>
                        <p>Already have an account? <Link to='/login'>Log in</Link></p>
                    </div>
                </div>
                <div className="card">
                    <div className="card_action">
                        <div className="links">
                            <Link to='/'>Take a tour</Link>
                            <button className="button_outlined" href="#">Explore</button>
                        </div>
                        <div className="community_item">
                            <img src={people} height="40rem" alt="Pepole" />
                            <p>1500+ members</p>
                            <div>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="gallery">
                        <h3>Our branches</h3>
                        <div className="gallery_slider">
                            <button onClick={pressedL}>{backward}</button>
                            <div className="gallery_slider_current">
                                <img src={arr[gallery_image]} alt="" />
                            </div>
                            <button onClick={pressedR}>{forward}</button>
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
    )
}