import React, { useEffect, useState } from "react";
import classes from "./header.module.css";
import Menu from "./menu/menu";
import Logo from "./logo";
import BurgerMenu from "./burgerMenu/burgerMenu";
import CalcBlock from "./optionsBlock/optionsBlock";

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
            <div className={classes.header__content}>
                <Logo />
                <div className={classes.menuAndCalcWrap}>
                    <Menu />
                    <CalcBlock />
                    <BurgerMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;
