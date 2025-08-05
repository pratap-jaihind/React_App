import React, { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div>
      <a href="/">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYTKRFunqaUFSmy578bQDu0lhmRxAv0z57_8CwlyJp6uRDu5joa6YqBCt8vO56V-jxVg4"
          alt="logo"
        />
      </a>
    </div>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      <div className="login">
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};
export default Header;
