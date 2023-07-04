import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './home.css';
import Navbar from './Navbar';
import Logo from "../assets/Zenith.png";
import people from "../assets/user.svg";
import main_image from "../assets/MainImage2.jpg";
import zara from "../assets/zara.svg";
import apple from "../assets/apple.svg";
import sony from "../assets/sony.svg";
import facebook from "../assets/facebook.svg";
import oracle from "../assets/oracle.svg";
import mercedes from "../assets/mercedes-benz.svg";
import microsoft from "../assets/microsoft.svg";
export default function Homepage() {

    return (
        <>
            <Navbar></Navbar>
            <div className="zenith_header_headline">
                <h1>REWIRING THE WAY YOU CODE</h1>
                <h3>Implementing latest tech stack</h3>
                <h3>Exploring future beyond possibilities</h3>
                <button>Read Reports</button>
            </div>
            <div className="gradient_bg">
                <div className='zenith_header section_padding'>
                    <div className='zenith_header_content'>
                        <h1 className='gradient_text'>Hi there all young and enthusiastic developers.</h1>
                        <p>We are ZENITH. We provide software solutions and references to tech stack.We will be delighted to
                            have you on this platform and we'll be learning a lot of stuff out there in industry.To register
                            click the Sign in button.</p>
                        <p>Subscribe to our mail list</p>
                        <div className='zenith_header_content_input'>
                            <input type="email" className='' placeholder='Your Email address' />
                            <button type='button'>Subscribe</button>
                        </div>
                        <div className='zenith_header_content_people'>
                            <img src={people} height="40rem" alt="Pepole" />
                            <p>1500+ members</p>
                        </div>
                    </div>
                    <div className='zenith_header_image'>
                        <img src={main_image} alt="This is an image" />
                    </div>
                </div>
                <div className='zenith_whatzenith section_margin' id='zenith'>
                    <div className='zenith_whatzenith_feature'>
                        <div className='zenith_features_container_feature'>
                            <div className='zenith_features_container_feature_title'>
                                <div></div>
                                <h1>What is ZENITH</h1>
                            </div>
                            <div className='zenith_features_container_feature_text'>
                                <p>a modern solution for modern requirements</p>
                            </div>
                        </div>
                    </div>
                    <div className='zenith_whatzenith_heading'>
                        <h1 className='gradient_text'>A platform meant to make your goals clear</h1>
                        <p>Explore all cool features</p>
                    </div>
                    <div className='zenith_whatzenith_container'>
                        <div className='zenith_features_container_feature'>
                            <div className='zenith_features_container_feature_title'>
                                <div></div>
                                <h1>Pathways</h1>
                            </div>
                            <div className='zenith_features_container_feature_text'>
                                <p>A fully guided pathway to becoming a Full stack Web developer</p>
                            </div>
                        </div>
                        <div className='zenith_features_container_feature'>
                            <div className='zenith_features_container_feature_title'>
                                <div></div>
                                <h1>DevOps Tools</h1>
                            </div>
                            <div className='zenith_features_container_feature_text'>
                                <p>Used by top companies like Google, Apple and Microsoft</p>
                            </div>
                        </div>
                        <div className='zenith_features_container_feature'>
                            <div className='zenith_features_container_feature_title'>
                                <div></div>
                                <h1>Top Interview Questions</h1>
                            </div>
                            <div className='zenith_features_container_feature_text'>
                                <p>Be on top of your game and be prepared for any question that may be asked</p>
                            </div>
                        </div>
                        <div className='zenith_features_container_feature'>
                            <div className='zenith_features_container_feature_title'>
                                <div></div>
                                <h1>Explore more</h1>
                            </div>
                            <div className='zenith_features_container_feature_text'>
                                <p>AI, Machine Learning, Blockchain, Network Security and much more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gallery_grid">
                <h1>Environment at ZENITH</h1>
                <div className="expandable_cards_box">
                    <div className="expandable_card support">
                        <h3>Supportive team members</h3>
                    </div>
                    <div className="expandable_card mentor">
                        <h3>Expert Mentors</h3>
                    </div>
                    <div className="expandable_card mic">
                        <h3>Open mic events</h3>
                    </div>
                    <div className="expandable_card environment">
                        <h3>Fresh Environment</h3>
                    </div>
                    <div className="expandable_card coffee">
                        <h3>Unlimited Coffee</h3>
                    </div>
                </div>
            </div>
            <div className="clients">
                <h1>Our Clients</h1>
                <div className="client_box">
                    <img src={zara} alt="" />
                    <img id="apple" src={apple} alt="" />
                    <img src={sony} alt="" />
                    <img src={facebook} alt="" />
                    <img src={oracle} alt="" />
                    <img src={mercedes} alt="" />
                    <img src={microsoft} alt="" />
                </div>
            </div>
            <div className="final_text">
                <h2>Enhancing the IT world with our tools </h2>
                <button>Get started</button>
            </div>
            <footer>
                <div>
                    <h3>About</h3>
                    <p><a href="#">Overview</a></p>
                    <p><a href="#">Careers</a></p>
                    <p><a href="#">Leadership Team</a></p>
                    <p><a href="#">News</a></p>
                    <p><a href="#">Privacy</a></p>
                </div>
                <div>
                    <h3>Products</h3>
                    <p><a href="#">Email Security</a></p>
                    <p><a href="#">Cloud Service</a></p>
                    <p><a href="#">Product analysis</a></p>
                </div>
                <div>
                    <h3>Connect</h3>
                    <p><a href="#">Contact us</a></p>
                    <p><a href="#">Office Locations</a></p>
                    <p><a href="#">Request an Interview</a></p>
                </div>
                <div>
                    <h3>Support</h3>
                    <p><a href="#">Support Login</a></p>
                    <p><a href="#">Support services</a></p>
                    <p><a href="#">IP Address Blocked</a></p>
                </div>
            </footer>
            <Outlet />
        </>
    )
}