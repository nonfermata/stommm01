import React from "react";
import classes from "./menu.module.css";
import menu from "../../../data/menu";
import { isFullHeaderChange } from "../../../../redux/isFullHeaderReducer";
import { connect } from "react-redux";

const Menu = ({ isFullHeader, isFullHeaderChange }) => {
    const handleClick = () => {
        if (!isFullHeader) {
            isFullHeaderChange();
        }
    };
    return (
        <nav>
            <ul className={classes.menu}>
                {menu.map(({ anchor, value }) => (
                    <li key={anchor}>
                        <a href={anchor} onClick={handleClick}>
                            {value}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const mapStateToProps = ({ isFullHeader }) => ({
    isFullHeader
});

const mapDispatchToProps = { isFullHeaderChange };

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
