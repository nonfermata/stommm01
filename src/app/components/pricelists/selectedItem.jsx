import React, { useState } from "react";
import classes from "./pricelists.module.css";
import removeFromList from "../common/svg/removeFromList";

const SelectedItem = ({ name, price, id, onClick }) => {
    const [btnClass, setButtonClass] = useState(classes.btnHidden);
    const showRemoveButton = () => {
        setButtonClass("");
    };
    const hideRemoveButton = () => {
        setButtonClass(classes.btnHidden);
    };
    return (
        <li onMouseOver={showRemoveButton} onMouseLeave={hideRemoveButton}>
            <div className={classes.name}>{name}</div>
            <div className={classes.priceAndActionWrap}>
                <div className={classes.price}>{price}</div>
                <div
                    title="Убрать услугу из списка"
                    className={classes.btn + " " + btnClass}
                    onClick={() => {
                        onClick(id);
                    }}
                >
                    {removeFromList}
                </div>
            </div>
        </li>
    );
};

export default SelectedItem;
