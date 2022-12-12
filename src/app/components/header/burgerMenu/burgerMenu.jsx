import React, { useState } from "react";
import classes from "./burgerMenu.module.css";
import burger from "../../svg/burger";
import menu from "../../../data/menu";
import closeMenu from "../../svg/closeMenu";

const BurgerMenu = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [burgerMenuClass, setBurgerMenuClass] = useState("");
    const handleMenuStatus = () => {
        setIsMenuActive((prevState) => !prevState);
    };
    return (
        <div className={classes.burgerMenuWrap}>
            <div className={classes.burger} onClick={handleMenuStatus}>
                {isMenuActive ? closeMenu : burger}
            </div>
            <ul
                className={
                    classes.burgerMenu +
                    (isMenuActive ? " " + classes.burgerMenuVisible : "")
                }
            >
                {menu.map(({ anchor, value }) => (
                    <li key={anchor}>
                        <a href={anchor}>{value}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BurgerMenu;
