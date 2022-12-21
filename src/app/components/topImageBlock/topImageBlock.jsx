import React from "react";
import check from "../common/svg/check";
import WipingBlock from "./wipingBlock";
import CommonBtn from "../common/commonBtn";
import classes from "./topImageBlock.module.css";
import contacts from "../../data/contacts";
import logo from "../../assets/images/logo.png"

const TopImageBlock = () => {
    return (
        <div className={classes.topImageBlockWrap}>
            <div className={classes.topImageBlock}></div>
            <div className={classes.topImageBlock__content}>
                <div className={classes.logoWrap}>
                    <img src={logo} alt="logo"/>
                </div>
                <div>
                    <WipingBlock timeout="300">
                        <h1 className={classes.mainTitle}>
                            {check} Стоматология
                            <br />
                            {check} Медицинские анализы
                            <br />
                            {check} Косметология
                        </h1>
                    </WipingBlock>
                    <WipingBlock timeout="550">
                        <p className={classes.subTitle}>
                            Центр «МеДДента»
                            <br />
                            {contacts.address.city}, {contacts.address.street}
                            <br />
                            {contacts.phones[0]}
                            <br />
                            {contacts.phones[1]}
                        </p>{" "}
                    </WipingBlock>
                    <WipingBlock timeout="800">
                        <div className={classes.btnWrap}>
                            <CommonBtn />
                        </div>
                    </WipingBlock>
                </div>
            </div>
        </div>
    );
};

export default TopImageBlock;
