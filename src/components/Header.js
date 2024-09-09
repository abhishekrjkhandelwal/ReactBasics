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
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-20" src={LOGO_URL} />
            </div>
            <div className="flex item-center">
                <ul className="flex p-4 m-4">
                    <li className="p-4">Home</li>
                    <li className="p-4"><Link to="/about">About Us</Link></li>
                    <li className="p-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="p-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="p-4">Cart</li>
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