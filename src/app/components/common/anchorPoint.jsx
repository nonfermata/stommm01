import React from "react";
import classes from "./common.module.css";

const AnchorPoint = ({ anchor }) => {
    return (
        <div
            className={classes.anchorPoint}
            id={anchor}
        ></div>
    );
};

export default AnchorPoint;
