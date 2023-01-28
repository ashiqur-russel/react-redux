import React from "react";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-header">TechBD</div>
      <div className="nav-list">
        <Link to={"/"}>HOME</Link>
        <Link to={"/top-rated"}>TOP RATED</Link>
        <Link to={"/about"}>ABOUT</Link>

        <Link to={"/cart"}>
          <BiCart style={{ width: "30px", height: "30px", color: "red" }} />
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
