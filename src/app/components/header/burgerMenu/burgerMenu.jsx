import React from "react";
import classes from "./burgerMenu.module.css";
import burgerSvg from "../../common/svg/burgerSvg";
import menu from "../../../data/menu";
import closeMenu from "../../common/svg/closeMenu";
import { useSelector, useDispatch } from "react-redux";
import { getBurger, toggleBurger } from "../../../../redux/burgerReducer";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
    const dispatch = useDispatch();
    const burger = useSelector(getBurger());
    const handleClick = () => {
        dispatch(toggleBurger());
    };
    return (
        <div className={classes.burgerMenuWrap}>
            <div className={classes.burger} onClick={handleClick}>
                {burger ? closeMenu : burgerSvg}
            </div>
            <ul
                className={
                    classes.burgerMenu +
                    (burger ? " " + classes.burgerMenuVisible : "")
                }
            >
                {menu.map(({ anchor, menu_name }) => (
                    <li key={anchor}>
                        {anchor === "docs" ? (
                            <Link to="/docs" onClick={handleClick}>
                                {menu_name}
                            </Link>
                        ) : (
                            <HashLink to={"/#" + anchor} onClick={handleClick}>
                                {menu_name}
                            </HashLink>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BurgerMenu;
