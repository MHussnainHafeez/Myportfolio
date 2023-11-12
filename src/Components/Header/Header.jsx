import React from "react";
// import { ReactNavbar } from "overlay-navbar";
// import logo from "../../Images/logo.png";
// import { FaUserAlt } from "react-icons/fa";
import Navbar from "../Navbar/navbar"
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import "./Header.css"
import Intro from "../intro/Intro"

const Header = () => {
  return (
    <>
    <div className="app">
      <Navbar/>
      <Intro/>
      </div>
      <Home/>
      <Footer/>
      </>
  );
};

export default Header;
