import React from 'react';
import classes from "./advantages.module.css"

const Advantage = ({ advantage }) => {
    return (
        <div className={classes.advantage}>
            <div className={classes.textBlock}>
                <p className={classes.title}>{advantage.title}</p>
                <p className={classes.description}>{advantage.description}</p>
            </div>
            <div className={classes.imgBlock}>
                <img src={advantage.imgURL} alt="icon"/>
            </div>

        </div>
    );
};

export default Advantage;