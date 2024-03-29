import React from "react";
import {Link} from "react-router-dom";
import classes from "./menu.module.css";
import menu from "../../../data/menu";
import { isFullHeaderChange } from "../../../../redux/isFullHeaderReducer";
import { connect } from "react-redux";
import { HashLink } from "react-router-hash-link";

const Menu = ({ isFullHeader, isFullHeaderChange }) => {
    const handleMenuClick = () => {
        if (!isFullHeader) {
            isFullHeaderChange();
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

const mapStateToProps = ({ isFullHeader }) => ({
    isFullHeader
});

const mapDispatchToProps = { isFullHeaderChange };

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
