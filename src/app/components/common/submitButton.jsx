import React from "react";

const SubmitButton = ({ disabled }) => {
    return (
        <button
            className={"btn form-btn " + (disabled ? " btn-disabled" : "")}
            disabled={disabled}
        >
            Отправить заявку
        </button>
    );
};

export default SubmitButton;
