import React from "react";
import classes from "./optionsBlock.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getBurger, toggleBurger } from "../../../../redux/burgerReducer";
import options from "../../../data/options";
import { Link } from "react-router-dom";

const OptionsBlock = () => {
    const dispatch = useDispatch();
    const burger = useSelector(getBurger());
    const handleClick = () => {
        if (burger) {
            dispatch(toggleBurger());
        }
    };
    return (
        <div className={classes.optionsBlock}>
            {options.map(({ id, name, icon }) => (
                <Link
                    to={"/" + id}
                    key={id}
                    title={name}
                    className={classes.option}
                    onClick={handleClick}
                >
                    {icon}
                </Link>
            ))}
        </div>
    );
};

export default OptionsBlock;
