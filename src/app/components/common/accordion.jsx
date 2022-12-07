import React, { useState } from "react";
import plus from "../svg/plus";

const Accordion = ({ title, list }) => {
    const [listClass, setListClass] = useState("list-hide");
    const [btnClass, setBtnClass] = useState("");
    const [isListVisible, setIsListVisible] = useState(false);
    const handleClick = () => {
        if (isListVisible) {
            setListClass("list-hide");
            setBtnClass("");
        } else {
            setListClass("list-show");
            setBtnClass("rotateBtn");
        }
        setIsListVisible((prevState) => !prevState);
    };
    return (
        <div className="accordion">
            <div className="accordion__header">
                <div className="accordion__title">{title}</div>
                <button
                    className={"openList " + btnClass}
                    onClick={handleClick}
                >
                    {plus}
                </button>
            </div>
            <ul className={"accordion__list " + listClass}>
                {list.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Accordion;
