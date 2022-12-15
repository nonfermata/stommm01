import React from "react";
import classes from "./common.module.css";

const AnchorPoint = ({ anchor }) => {
    return <div id={anchor} className={classes.anchorPoint}></div>;
};

export default AnchorPoint;
