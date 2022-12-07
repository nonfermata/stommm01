import React, { useState } from "react";
import ConsultForm from "./consultForm";
import { toast } from "react-toastify";

const CommonBtn = () => {
    const [isConsult, setIsConsult] = useState(false);
    const handleClick = () => {
        setIsConsult(true);
    };
    const handleHideForm = ({ target, type }) => {
        if (target.tagName === "svg" || target.tagName === "path") {
            setIsConsult(false);
        } else if (!target.className.includes("form") || type === "submit") {
            setIsConsult(false);
            if (type === "submit") {
                toast.success(
                    "Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.",
                    { position: "bottom-center" }
                );
            }
        }
    };
    return (
        <>
            <button className="btn" onClick={handleClick}>
                Записаться на консультацию
            </button>
            {isConsult && <ConsultForm onClose={handleHideForm} />}
        </>
    );
};

export default CommonBtn;
