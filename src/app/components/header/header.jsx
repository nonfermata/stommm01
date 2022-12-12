import React, { useEffect, useState } from "react";
import classes from "./header.module.css";
import Menu from "./menu/menu";
import Logo from "./logo";
import Phone from "./phone";
import BurgerMenu from "./burgerMenu/burgerMenu";

const Header = ({ isFullHeader }) => {
    const [headerClass, setHeaderClass] = useState(classes.header);
    useEffect(() => {
        setTimeout(() => {
            setHeaderClass(classes.header + " " + classes.headerShow);
        }, 0);
    }, []);
    useEffect(() => {
        setHeaderClass(classes.header + " " + classes.headerFullShow);
    }, [isFullHeader]);
    return (
        <header className={headerClass}>
            <BurgerMenu/>
            <div className={classes.header__content}>
                <Logo />
                <div className={classes.menuAndPhoneWrap}>
                    <Menu />
                    <Phone />
                </div>
            </div>
        </header>
    );
};

export default Header;
