import React from "react";
import classes from "./pricelists.module.css";

const TotalPriceFixedBlock = ({ fixedBlockClass, totalPrice }) => {
    return (
        <div className={classes.totalPriceFixedBlock + " " + fixedBlockClass}>
            Выбрано услуг
            <br />
            на <span className={classes.totalPrice}>{totalPrice} </span>
            рублей
        </div>
    );
};

export default TotalPriceFixedBlock;
