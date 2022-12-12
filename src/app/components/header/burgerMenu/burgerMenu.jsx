import React from "react";
import classes from "./burgerMenu.module.css";
import burger from "../../svg/burger";
import menu from "../../../data/menu";

const BurgerMenu = () => {
    return (
        <div className={classes.burgerMenuWrap}>
            <div className={classes.burger}>{burger}</div>
            <ul className={classes.burgerMenu}>
                {menu.map(({ anchor, value }) => (
                    <li key={anchor}>
                        <a href={anchor}>
                            {value}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BurgerMenu;
