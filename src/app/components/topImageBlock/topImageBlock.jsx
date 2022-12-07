import React from "react";
import check from "../svg/check";
import WipingBlock from "./wipingBlock";
import CommonBtn from "../common/commonBtn";

const TopImageBlock = () => {
    return (
        <div className="topImageBlock">
            <div className="topImageBlock__content">
                <WipingBlock timeout="300">
                    <h1 className="mainTitle">
                        {check} Стоматология
                        <br />
                        {check} Косметология
                        <br />
                        {check} Медицинские анализы
                    </h1>
                </WipingBlock>
                <WipingBlock timeout="550">
                    <p className="subTitle">
                        Центр «МЕДДЕНТА»
                        <br />
                        г. Клин, ул. Чайковского, 105, корп. 3<br />
                        +7 996 655 8190
                    </p>{" "}
                </WipingBlock>
                <WipingBlock timeout="800">
                    <CommonBtn />
                </WipingBlock>
            </div>
        </div>
    );
};

export default TopImageBlock;
