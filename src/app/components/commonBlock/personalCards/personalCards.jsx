import React from "react";
import persons from "../../../data/persons";
import PersonalCard from "./personalCard";
import classes from "./personalCards.module.css";

const PersonalCards = () => {
    return (
        <div className={classes.personalCards}>
            {persons.map(({ name, description, personClass }) => (
                <PersonalCard
                    key={personClass}
                    personClass={personClass}
                    name={name}
                    desription={description}
                />
            ))}
        </div>
    );
};

export default PersonalCards;
