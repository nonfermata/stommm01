import React from "react";
import classes from "./common.module.css"

const SubmitButton = ({ disabled }) => {
    return (
        <button
            className={classes.btn + " form-btn " + (disabled ? classes.btnDisabled : "")}
            disabled={disabled}
        >
            Отправить заявку
        </button>
    );
};

export default SubmitButton;
