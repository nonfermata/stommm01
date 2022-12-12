import React from "react";
import classes from "./header.module.css";
import contacts from "../../data/contacts";

const Phone = () => {
    return <div className={classes.phone}>{contacts.phones[0]}</div>;
};

export default Phone;
