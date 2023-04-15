import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
      {auth ? (
        <ul className="nav-ul">
          <img
            src="https://th.bing.com/th/id/OIP.efn9arE2NaTrxQc5Zno6SgHaE8?w=301&h=200&c=7&r=0&o=5&pid=1.7"
            alt="logo"
            className="logo"
          />
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
          <li>
            <Link to="/update">Update Product</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to="/signup">
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <img
            src="https://th.bing.com/th/id/OIP.efn9arE2NaTrxQc5Zno6SgHaE8?w=301&h=200&c=7&r=0&o=5&pid=1.7"
            alt="logo"
            className="logo"
          />
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
