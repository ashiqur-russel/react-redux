import React from "react";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-header">Bookholic</div>
      <div className="nav-list">
        <Link to={""}>HOME</Link>
        <Link to={""}>TOP RATED</Link>
        <Link to={""}>ABOUT</Link>
        <Link to={""}>
          <p className="icon">
            <FaListUl />
          </p>
        </Link>
        <Link to={""}>
          <p className="icon">
            {" "}
            <BiCart />
          </p>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
