import React from "react";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CustomButton from "../custom-button/custom-button.component";
import "../header/header.style.css";

const Header = () => {

    return    <div className="header">
        <CustomButton btnStyle="primary"><span>Home</span></CustomButton>
        <CustomButton btnStyle="primary"><span>About</span></CustomButton>
        <CustomButton btnStyle="primary"><span>Blog</span></CustomButton>
        <CustomButton btnStyle="primary"><span>Contact</span></CustomButton>
        {/* <img  curveStyle="prim" src={curve}  alt="curve"/> */}
         
          </div> 
};

export default Header;