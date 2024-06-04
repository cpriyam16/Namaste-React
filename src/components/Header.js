import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between" style={{padding: "0 20px"}}>
            <div className="logo w-40 m-8">
                <img src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex m-16">
                    <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>

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
