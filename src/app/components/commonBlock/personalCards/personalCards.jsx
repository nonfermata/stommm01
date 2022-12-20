import React from "react";
import persons from "../../../data/persons";
import PersonalCard from "./personalCard";
import classes from "./personalCards.module.css";

const PersonalCards = () => {
    return (
        <div className={classes.personalCards}>
            {persons.map((person) => (
                <PersonalCard key={person.name} {...person} />
            ))}
        </div>
    );
};

export default PersonalCards;
