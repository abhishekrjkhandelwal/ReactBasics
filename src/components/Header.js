import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

//Header Component
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    console.log("Header Rendered")
    
    useEffect(() => {
        console.log("useEffect called")
    }, [btnName])

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                        console.log("btnName===========>", btnName)
                    }}>
                    {btnName}</button>
                </ul>   
            </div>
        </div>
    )
}

export default Header;