import React from "react";
import classes from "./developer.module.css";

const Developer = () => {
    return (
        <div className={classes.author}>
            Разработка и поддержка сайта:<br/>
            <a href="mailto: nonfermata@gmail.com">Дмитрий Баулин</a>
        </div>
    );
};

export default Developer;
