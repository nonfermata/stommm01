import React from "react";
import classes from "./personalCards.module.css";

const PersonalCard = ({ name, photo, role, description }) => {
    return (
        <div className={classes.personalCard}>
            <img className={classes.photo} src={photo} alt={name} />
            <h3 className={classes.name}>{name}</h3>
            <div className={classes.role}>{role}</div>
            <p className={classes.description}>{description}</p>
        </div>
    );
};

export default PersonalCard;
