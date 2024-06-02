import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
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
