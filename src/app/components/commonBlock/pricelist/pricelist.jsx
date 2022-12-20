import React from "react";
import classes from "./pricelist.module.css";
import services from "../../../data/services";
import { isBurgerActiveChange } from "../../../../redux/isBurgerActiveReducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const PriceList = ({ isBurgerActive, isBurgerActiveChange }) => {
    const handleClick = () => {
        if (isBurgerActive) {
            isBurgerActiveChange();
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

const mapStateToProps = ({ isBurgerActive }) => ({
    isBurgerActive
});

const mapDispatchToProps = { isBurgerActiveChange };

export default connect(mapStateToProps, mapDispatchToProps)(PriceList);
