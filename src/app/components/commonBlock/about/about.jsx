import React from "react";
import about from "../../../data/about";
import classes from "./about.module.css";

const About = () => {
    return <p className={classes.about}>{about}</p>;
};

export default About;
