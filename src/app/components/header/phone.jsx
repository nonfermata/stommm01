import React from "react";
import classes from "./header.module.css";
import contacts from "../../data/contacts";

const Phone = () => {
    return <div className={classes.phone}>{contacts.phone}</div>;
};

export default Phone;
