import React from "react";
import classes from "./menu.module.css";
import menu from "../../../data/menu";
import { isFullHeaderChange } from "../../../../redux/isFullHeaderReducer";
import { setVisible } from "../../../../redux/visibleCompReducer";
import { connect } from "react-redux";

const Menu = ({
    isFullHeader,
    isFullHeaderChange,
    visibleComp,
    setVisible
}) => {
    const handleMenuClick = () => {
        if (visibleComp !== "main") {
            setVisible("main");
        }
        if (!isFullHeader) {
            isFullHeaderChange();
        }
    };
    return (
        <nav className={classes.nav}>
            <ul className={classes.menu}>
                {menu.map(({ anchor, menu_name }) => (
                    <li key={anchor}>
                        <a href={"#" + anchor} onClick={handleMenuClick}>
                            {menu_name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const mapStateToProps = ({ isFullHeader, visibleComp }) => ({
    isFullHeader,
    visibleComp
});

const mapDispatchToProps = { isFullHeaderChange, setVisible };

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
