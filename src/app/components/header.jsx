import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
    const [headerClass, setHeaderClass] = useState("header");
    useEffect(() => {
        setTimeout(() => {
            setHeaderClass("header header-show");
        }, 0);
    }, []);
    return (
        <header className={headerClass}>
            <div className="header__cont">
                <div className="logoBox">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className="navbar">
                    <nav>
                        <ul className="menu">
                            <li>
                                <a href="#about">О нас</a>
                            </li>
                            <li>
                                <a href="#services">Услуги</a>
                            </li>
                            <li>
                                <a href="#personal">Специалисты</a>
                            </li>
                            <li>
                                <a href="/">Прайс-лист</a>
                            </li>
                            <li>
                                <a href="/">Контакты</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="tel fs1_1">+7 996 655 8190</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
