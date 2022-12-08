import React from 'react';
import classes from "./header.module.css";
import logo from "../../assets/images/logo.png";

const Logo = () => {
    return (
        <div className={classes.logoBox}>
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
        </div>
    );
};

export default Logo;