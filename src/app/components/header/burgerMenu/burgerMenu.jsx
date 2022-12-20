import React, { useState } from "react";
import classes from "./burgerMenu.module.css";
import burger from "../../common/svg/burger";
import menu from "../../../data/menu";
import closeMenu from "../../common/svg/closeMenu";
import { setVisible } from "../../../../redux/visibleCompReducer";
import { connect } from "react-redux";
import { isFullHeaderChange } from "../../../../redux/isFullHeaderReducer";
import { isBurgerActiveChange } from "../../../../redux/isBurgerActiveReducer";

const BurgerMenu = ({
    isFullHeader,
    isFullHeaderChange,
    visibleComp,
    setVisible,
    isBurgerActiveChange,
    isBurgerActive
}) => {
    const handleMenuClick = () => {
        isBurgerActiveChange();
        if (visibleComp !== "main") {
            setVisible("main");
        }
        if (!isFullHeader) {
            isFullHeaderChange();
        }
    };
    return (
        <div className={classes.burgerMenuWrap}>
            <div className={classes.burger} onClick={isBurgerActiveChange}>
                {isBurgerActive ? closeMenu : burger}
            </div>
            <ul
                className={
                    classes.burgerMenu +
                    (isBurgerActive ? " " + classes.burgerMenuVisible : "")
                }
            >
                {menu.map(({ anchor, menu_name }) => (
                    <li key={anchor}>
                        <a href={"#" + anchor} onClick={handleMenuClick}>
                            {menu_name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = ({ isFullHeader, visibleComp, isBurgerActive }) => ({
    isFullHeader,
    visibleComp,
    isBurgerActive
});

const mapDispatchToProps = {
    isFullHeaderChange,
    setVisible,
    isBurgerActiveChange
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu);
