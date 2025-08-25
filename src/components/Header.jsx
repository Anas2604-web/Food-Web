import { useState } from "react";
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
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button  onClick={() => {
              loggedIn === "logout" ? setloggedIn("login") :
              setloggedIn("logout");
            }} className="btn">{loggedIn}</button>
          </ul>
        </div>
      </div>
    )
  }
  export default Header;