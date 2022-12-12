import React from "react";
import classes from "./advantages.module.css";
import advantages from "../../../data/advantages";
import Advantage from "./advantage";

const Advantages = () => {
    return (
        <div className={classes.advantages}>
            {advantages.map((advantage) => (
                <Advantage key={advantage.title} advantage={advantage} />
            ))}
        </div>
    );
};

export default Advantages;
