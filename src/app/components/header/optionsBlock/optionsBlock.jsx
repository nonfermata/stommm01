import React from "react";
import classes from "./optionsBlock.module.css";
import { connect } from "react-redux";
import { isBurgerActiveChange } from "../../../../redux/isBurgerActiveReducer";
import options from "../../../data/options";
import { Link } from "react-router-dom";

const OptionsBlock = ({
    isBurgerActive,
    isBurgerActiveChange
}) => {
    const handleClick = () => {
        if (isBurgerActive) {
            isBurgerActiveChange();
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

const mapStateToProps = ({ visibleComp, isBurgerActive }) => ({
    isBurgerActive
});

const mapDispatchToProps = { isBurgerActiveChange };

export default connect(mapStateToProps, mapDispatchToProps)(OptionsBlock);
