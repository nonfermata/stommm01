import React from "react";
import classes from "./personalCards.module.css";

const PersonalCard = ({ personClass, name, desription }) => {
    return (
        <div className={classes.personalCard}>
            <div className={classes[personClass]}></div>
            <h3 className={classes.personName}>{name}</h3>
            <p className={classes.personDecription}>{desription}</p>
        </div>
    );
};

export default PersonalCard;
