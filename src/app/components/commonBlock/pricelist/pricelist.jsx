import React from "react";
import classes from "./pricelist.module.css";
import services from "../../../data/services";
import { getBurger, toggleBurger } from "../../../../redux/burgerReducer";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const PriceList = () => {
    const dispatch = useDispatch();
    const burger = useSelector(getBurger());
    const handleClick = () => {
        if (burger) {
            dispatch(toggleBurger());
        }
    };
    return (
        <div className={classes.pricelistCards}>
            {services.map(({ id, name, icon }) => (
                <Link
                    to={"/" + id}
                    className={classes.pricelistCard}
                    key={id}
                    onClick={handleClick}
                    title={name}
                >
                    <img src={icon} alt="icon" />
                    <div className={classes.priceName}>{name}</div>
                </Link>
            ))}
        </div>
    );
};

export default PriceList;
