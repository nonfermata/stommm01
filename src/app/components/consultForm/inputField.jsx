import React, { useState } from "react";
import classes from "./consultForm.module.css";

const InputField = ({ onChange, placeholder, value, error, name }) => {
    const [isFirstRender, setIsFirstRender] = useState(true);
    const handleChange = ({ target }) => {
        if (isFirstRender) setIsFirstRender(false);
        onChange(name, target.value);
    };
    return (
        <div className={classes.form__inputWrap}>
            <input
                name={name}
                type="text"
                className={classes.form__input}
                onChange={handleChange}
                placeholder={placeholder}
                value={value}
            />
            {error && !isFirstRender && <p className={classes.error}>{error}</p>}
        </div>
    );
};

export default InputField;
