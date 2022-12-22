import React from "react";
import classes from "./consultForm.module.css"

const Textarea = ({ onChange, placeholder, value, name, rows }) => {
    const handleChange = ({ target }) => {
        onChange(name, target.value);
    };
    return (
        <textarea
            className={classes.form__textarea}
            name={name}
            value={value}
            rows={rows}
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
};

export default Textarea;
