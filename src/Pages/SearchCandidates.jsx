import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logo from "../assets/Zenith.png";
import Navbar from './Navbar';
import './home.css';
import sample_data from '/sample_data.js';
export default function SearchCandidates() {
    const [match, setMatch] = useState([]);
    const [inp, setInp] = useState(null);
    const [filter, setFilter] = useState(null);
    const onchangeInput = (e) => {
        setInp(e.target.value);
    }
    const onchangeFilter = (e) => {
        setFilter(e.target.value);
    }
    function calculate() {
        if (inp == null || filter == null) {
            return;
        }
        var arr = [];
        sample_data.map((i) => {
            if (filter == 1 && i.location.includes(inp)) {
                arr.push(i);
            }
            else if (filter == 2 && i.job_role.includes(inp)) {
                arr.push(i);
            }
        })
        setMatch(arr);
        console.log(arr);
    }
    return (
        <>
            <Navbar></Navbar>
            <div>
                <div className="search_bar">
                    <input type="text" name="toSearch" onChange={onchangeInput} placeholder="Location / job role" />
                    <select name="filter" id="filter" onChange={onchangeFilter}>
                        <option value="" selected>Filter by</option>
                        <option value="1">Location</option>
                        <option value="2">Job role</option>
                    </select>
                    <button onClick={calculate}><span className="material-symbols-outlined">
                        search
                    </span></button>
                </div>
                <div className="candidate_list">
                    {
                        match.map(item => {
                            return (
                                <div className="candidate">
                                    <div><h3>{item.name}</h3></div>
                                    <div><h3>{item.age}</h3></div>
                                    <div><h3>{item.location}</h3></div>
                                    <div><h3>{item.job_role}</h3></div>
                                </div>
                            );
                        })}

                    {/* <div className="candidate">Candidate 2</div>
                    <div className="candidate">Candidate 3</div>
                    <div className="candidate">Candidate 4</div> */}
                </div>
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
        </>
    )
}