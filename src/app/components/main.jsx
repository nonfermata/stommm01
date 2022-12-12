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
import Advantages from "./commonBlockOnly/advantages/advantages";
import Reviews from "./commonBlock/reviews/reviews";
import Contacts from "./commonBlock/contacts/contacts";

const Main = () => {
    return (
        <>
            <TopImageBlock />
            <CommonBlock addingClass="about" title="О нас">
                <p className="fs1_1 whiteColor">{about}</p>
            </CommonBlock>
            <CommonBlockOnly wrapClass="advantagesWrap">
                <Advantages />
            </CommonBlockOnly>
            <CommonBlock addingClass="services" title="Услуги и цены">
                <p className="fs1_1">
                    Мы предлагаем нашим клиентам следующие виды услуг:
                </p>
                <Services />
                <div className={classes.btn2Wrap}>
                    <CommonBtn />
                </div>
            </CommonBlock>
            <CommonBlockOnly wrapClass="photoBlockWrap">
                <PhotoCollageBlock />
            </CommonBlockOnly>
            <CommonBlock addingClass="personal" title="Наши специалисты">
                <PersonalCards />
            </CommonBlock>
            <CommonBlock title="Отзывы" addingClass="reviews">
                <Reviews />
            </CommonBlock>
            <CommonBlock title="Контакты" addingClass="contacts">
                <Contacts />
            </CommonBlock>
        </>
    );
};

export default Main;
