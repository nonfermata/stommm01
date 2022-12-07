import React from "react";

const PersonalCard = ({ personClass, name, desription }) => {
    return (
        <div className="personalCard">
            <div className={personClass}></div>
            <h3 className="personName">{name}</h3>
            <p className="personDecription">{desription}</p>
        </div>
    );
};

export default PersonalCard;
