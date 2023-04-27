import React from "react";
import classes from "./burgerMenu.module.css";
import burger from "../../common/svg/burger";
import menu from "../../../data/menu";
import closeMenu from "../../common/svg/closeMenu";
import { connect } from "react-redux";
import { isBurgerActiveChange } from "../../../../redux/isBurgerActiveReducer";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const BurgerMenu = ({ isBurgerActiveChange, isBurgerActive }) => {
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
                        {anchor === "docs" ? (
                            <Link to="/docs" onClick={isBurgerActiveChange}>
                                {menu_name}
                            </Link>
                        ) : (
                            <HashLink
                                to={"/#" + anchor}
                                onClick={isBurgerActiveChange}
                            >
                                {menu_name}
                            </HashLink>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = ({ isBurgerActive }) => ({
    isBurgerActive
});

const mapDispatchToProps = {
    isBurgerActiveChange
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu);
