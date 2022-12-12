import React from "react";
import check from "../svg/check";
import WipingBlock from "./wipingBlock";
import CommonBtn from "../common/commonBtn";
import classes from "./topImageBlock.module.css";
import contacts from "../../data/contacts";

const TopImageBlock = () => {
    return (
        <div className={classes.topImageBlock}>
            <div className={classes.topImageBlock__content}>
                <div className={classes.leftBlockWrap}>
                    <WipingBlock timeout="300">
                        <h1 className={classes.mainTitle}>
                            {check} Стоматология
                            <br />
                            {check} Косметология
                            <br />
                            {check} Медицинские анализы
                        </h1>
                    </WipingBlock>
                    <WipingBlock timeout="550">
                        <p className={classes.subTitle}>
                            Центр «МЕДДЕНТА»
                            <br />
                            {contacts.address.city}, {contacts.address.street}
                            <br />
                            {contacts.phones[0]}
                        </p>{" "}
                    </WipingBlock>
                    <WipingBlock timeout="800">
                        <CommonBtn />
                    </WipingBlock>
                </div>
            </div>
        </div>
    );
};

export default TopImageBlock;
