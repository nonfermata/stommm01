import React from "react";

const Textarea = ({ onChange, placeholder, value, name, rows }) => {
    const handleChange = ({ target }) => {
        onChange(name, target.value);
    };
    return (
        <textarea
            className="form__textarea"
            id={name}
            value={value}
            rows={rows}
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
};

export default Textarea;
