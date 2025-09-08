import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineConnection from "../utils/useOnlineConnection";
import { Menu, X } from "lucide-react"; // for hamburger icons
import { useSelector } from "react-redux";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState("login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Online = useOnlineConnection();
  
  // Subscribing to the Redux store to get cart items
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems); 

  return (
    <header className="w-full bg-orange-100 shadow-2xl z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div>
          <img src="/logo.png" alt="Logo" className="w-42 h-24" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex gap-8 font-medium text-gray-700 items-center">
            <li className="px-3 text-sm text-gray-500">
              Online Status: {Online ? "🟢" : "🔴"}
            </li>
            <li>
              <Link to="/" className="px-3 py-2 hover:text-orange-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="px-3 py-2 hover:text-orange-400 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="px-3 py-2 hover:text-orange-400 transition"
              >
                Contact Us
              </Link>
            </li>
            <li className="px-3 font-bold">Cart - ({cartItems.length})</li>

            {/* Login Button */}
            <button
              onClick={() =>
                setLoggedIn(loggedIn === "logout" ? "login" : "logout")
              }
              className="ml-6 px-5 py-2 rounded-xl bg-orange-400 text-white font-medium hover:bg-orange-500 active:scale-95 transition"
            >
              {loggedIn}
            </button>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-orange-50 px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li className="text-sm text-gray-500">
              Online Status: {Online ? "🟢" : "🔴"}
            </li>
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-orange-500 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-orange-500 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-orange-500 transition"
              >
                Contact Us
              </Link>
            </li>
            <li>Cart</li>

            <button
              onClick={() => {
                setLoggedIn(loggedIn === "logout" ? "login" : "logout");
                setIsMenuOpen(false);
              }}
              className="px-5 py-2 rounded-xl bg-orange-400 text-white font-medium hover:bg-orange-500 active:scale-95 transition"
            >
              {loggedIn}
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
