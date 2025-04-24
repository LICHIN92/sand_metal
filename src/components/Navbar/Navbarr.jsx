import React from 'react';
import './nav.css';
import { useNavigate } from 'react-router-dom';

const Navbarr = () => {
    const navigate=useNavigate()
    const closeMenu = () => {
        const checkbox = document.getElementById("check");
        if (checkbox) checkbox.checked = false;
    };
    return (
        <div>
            <nav>
                <h1>Sand & Metals</h1>
                <input type="checkbox" id="check" />
                <label htmlFor="check">
                    <i className="fa-sharp fa-solid fa-bars" id="btn"></i>
                    <i className="fas fa-times" id="cancel"></i>
                </label>
                <ul>
                    <li onClick={()=>{navigate('/'),closeMenu()}}>Home</li>
                    <li onClick={()=>{navigate('/about'),closeMenu()}}>About</li>
                    <li onClick={()=>{ navigate('/material'),closeMenu()}}>material</li>
                    <li onClick={()=>{navigate('/booking'), closeMenu()}}>Booking</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbarr;
