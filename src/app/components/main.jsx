import React from "react";
import TopImageBlock from "./topImageBlock/topImageBlock";
import CommonBlock from "./commonBlock/commonBlock";
import CommonBlockOnly from "./commonBlockOnly/commonBlockOnly";
import PersonalCards from "./commonBlock/personalCards/personalCards";
import PhotoCollageBlock from "./commonBlockOnly/photoCollageBlock/photoCollageBlock";
import Services from "./commonBlock/services/services";
import Advantages from "./commonBlockOnly/advantages/advantages";
import Reviews from "./commonBlock/reviews/reviews";
import Contacts from "./commonBlock/contacts/contacts";
import About from "./commonBlock/about/about";

const Main = () => {
    return (
        <>
            <TopImageBlock />

            <CommonBlock addingClass="about" title="О нас">
                <About />
            </CommonBlock>

            <CommonBlockOnly wrapClass="advantagesWrap">
                <Advantages />
            </CommonBlockOnly>

            <CommonBlock addingClass="services" title="Услуги и цены">
                <Services />
            </CommonBlock>

            <CommonBlockOnly wrapClass="photoBlockWrap">
                <PhotoCollageBlock />
            </CommonBlockOnly>

            <CommonBlock addingClass="personal" title="Наши специалисты">
                <PersonalCards />
            </CommonBlock>

            <CommonBlock addingClass="reviews" title="Отзывы">
                <Reviews />
            </CommonBlock>

            <CommonBlock addingClass="contacts" title="Контакты">
                <Contacts />
            </CommonBlock>
        </>
    );
};

export default Main;
