import React from "react";
import {Link} from "react-router-dom";
import classes from "./menu.module.css";
import menu from "../../../data/menu";
import {getHeaderOpacity, setHeaderOpaque} from "../../../../redux/headerReducer";
import { useSelector, useDispatch } from "react-redux";
import { HashLink } from "react-router-hash-link";

const Menu = () => {
    const dispatch = useDispatch()
    const isHeaderTransparent = useSelector(getHeaderOpacity())
    const handleMenuClick = () => {
        if (!isHeaderTransparent) {
            dispatch(setHeaderOpaque());
        }
    };
    return (
        <nav className={classes.nav}>
            <ul className={classes.menu}>
                {menu.map(({ anchor, menu_name }) => (
                    <li key={anchor}>
                        {anchor === "docs" ? (
                            <Link to="/docs" onClick={handleMenuClick}>
                                {menu_name}
                            </Link>
                        ) : (
                            <HashLink
                                to={"/#" + anchor}
                                onClick={handleMenuClick}
                            >
                                {menu_name}
                            </HashLink>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
