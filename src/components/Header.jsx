import { useState } from "react";
import { Link } from "react-router-dom";

  const Header = () => {

   const [loggedIn,setloggedIn] = useState("login");

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
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/about">About</Link></li>
            <li> <Link to= "/contact">Contact Us</Link></li>
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