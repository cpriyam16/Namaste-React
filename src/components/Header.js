import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    return (
        <div className="header" style={{padding: "0 20px"}}>
            <div className="logo">
                <img src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <li
                        className="login"
                        onClick={() => {
                            // btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                            const updateBtnName = btnNameReact === "Login" ? "Logout" : "Login";
                            setBtnNameReact(updateBtnName);
                        }}>
                        {btnNameReact}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
