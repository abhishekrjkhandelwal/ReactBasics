import { LOGO_URL } from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

//Header Component
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    console.log("Header Rendered")
    
    const data = useContext(UserContext)
    const { loggedInUser } = useContext(UserContext)

    console.log("data=============++>", data)

    const cartItems = useSelector((store) => store.cart.items)

    console.log("cartItems===================>", cartItems)

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
                    <li className="p-4"><Link to="/">Home</Link></li>
                    <li className="p-4"><Link to="/about">About Us</Link></li>
                    <li className="p-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="p-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="p-4 font-bold text-xl">
                        <Link to="/cart">Cart - {cartItems.length} items</Link>
                    </li>
                    <button className="login" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                        console.log("btnName===========>", btnName)
                    }}>
                    {btnName}</button>
                    <li className="px-4">{loggedInUser}</li>
                </ul>   
            </div>
        </div>
    )
}

export default Header;