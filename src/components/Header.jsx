import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineConnection from "../utils/useOnlineConnection";

  const Header = () => {

   const [loggedIn,setloggedIn] = useState("login");

   const Online = useOnlineConnection();

    return  (
      <div className="header">
        <div className="logo-container">
          <img 
          src="/logo.jpg"
          className="logo">
          </img>
        </div>
        <div className="nav">
          <ul>
            <li> Online Status:
              {Online ? "🟢" : "🔴"}
            </li>
            <li> <Link to="/" className="link">Home</Link></li>
            <li> <Link to="/about" className="link">About</Link></li>
            <li> <Link to= "/contact" className="link">Contact Us</Link></li>
            <li>Cart</li>
            <button  onClick={() => {
              loggedIn === "logout" ? setloggedIn("login") :
              setloggedIn("logout");
            }} className="buttonn">{loggedIn}</button>
          </ul>
        </div>
      </div>
    )
  }
  export default Header;