import React, { useState } from "react";

const InputField = ({ onChange, placeholder, value, error, name }) => {
    const [isFirstRender, setIsFirstRender] = useState(true);
    const handleChange = ({ target }) => {
        if (isFirstRender) setIsFirstRender(false);
        onChange(name, target.value);
    };
    return (
        <div className="form__input-wrap">
            <input
                type="text"
                className="form__input"
                onChange={handleChange}
                placeholder={placeholder}
                value={value}
            />
            {error && !isFirstRender && <p className="error">{error}</p>}
        </div>
    );
};

export default InputField;
