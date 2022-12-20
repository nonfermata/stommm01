import React, { useState } from "react";
import plus from "../../common/svg/plus";
import chevron from "../../common/svg/chevron";
import classes from "./services.module.css"

const Accordion = ({ title, list, id }) => {
    const [listClass, setListClass] = useState(classes.listHide);
    const [btnClass, setBtnClass] = useState("");
    const [isListVisible, setIsListVisible] = useState(false);
    const handleClick = () => {
        if (isListVisible) {
            setListClass(classes.listHide);
            setBtnClass("");
        } else {
            setListClass(classes.listShow);
            setBtnClass(classes.rotateBtn);
        }
        setIsListVisible((prevState) => !prevState);
    };
    return (
        <div className={classes.accordion}>
            <div className={classes.accordion__header}>
                <div className={classes.accordion__title}>{title}</div>
                <button
                    className={classes.openList + " " + btnClass}
                    onClick={handleClick}
                >
                    {plus}
                </button>
            </div>
            <ul className={classes.accordion__list + " " + listClass}>
                {list.map((item) => (
                    <li key={item}>{id !== "analysis" && chevron} {item}</li>
                ))}
                <li className={classes.spanLink}><a href="#pricelist">посмотреть весь прайс-лист »</a></li>
            </ul>
        </div>
    );
};

export default Accordion;
