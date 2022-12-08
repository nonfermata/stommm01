import React from "react";
import TopImageBlock from "./topImageBlock/topImageBlock";
import CommonBlock from "./commonBlock/commonBlock";
import CommonBtn from "./common/commonBtn";
import CommonBlockOnly from "./commonBlockOnly/commonBlockOnly";
import classes from "./main.module.css";
import about from "../data/about";
import PersonalCards from "./commonBlock/personalCards/personalCards";
import PhotoCollageBlock from "./commonBlockOnly/photoCollageBlock/photoCollageBlock";
import Services from "./commonBlock/services/services";

const Main = () => {
    return (
        <>
            <TopImageBlock />
            <CommonBlock addingClass="about" title="О нас">
                <p className="fs1_1 whiteColor">{about}</p>
            </CommonBlock>
            <CommonBlock addingClass="services" title="Наши услуги">
                <p className="fs1_1">
                    Мы предлагаем нашим клиентам следующие виды услуг:
                </p>
                <Services />
                <div className={classes.btn2Wrap}>
                    <CommonBtn />
                </div>
            </CommonBlock>
            <CommonBlockOnly addingClass="photoBlockWrap">
                <PhotoCollageBlock />
            </CommonBlockOnly>
            <CommonBlock addingClass="personal" title="Наши специалисты">
                <PersonalCards />
            </CommonBlock>
            <CommonBlock
                addingClass="pricelist"
                title="Наши цены"
            ></CommonBlock>
        </>
    );
};

export default Main;
