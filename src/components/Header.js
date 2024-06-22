import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between shadow-sm">
            <div className="logo w-40 mt-5 mx-6">
                <img src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex m-16">
                    <li className="px-1 mx-2">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-1 mx-2"><Link to="/">Home</Link></li>
                    <li className="px-1 mx-2"><Link to="/about">About</Link></li>
                    <li className="px-1 mx-2"><Link to="/contact">Contact</Link></li>
                    <li className="px-1 mx-2"><Link to="/grocery">Grocery</Link></li>

                    <li className="px-1 mx-2">Cart</li>
                    <li
                        className="login px-1 ml-2"
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
