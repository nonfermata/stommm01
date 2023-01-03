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
import PriceList from "./commonBlock/pricelist/pricelist";
import Developer from "./developer/developer";

const Main = () => {
    return (
        <>
            <TopImageBlock />
            <CommonBlock name="about">
                <About />
            </CommonBlock>
            <CommonBlockOnly wrapClass="advantagesWrap">
                <Advantages />
            </CommonBlockOnly>
            <CommonBlock name="services">
                <Services />
            </CommonBlock>
            <CommonBlockOnly wrapClass="photoBlockWrap">
                <PhotoCollageBlock />
            </CommonBlockOnly>
            <CommonBlock name="personal">
                <PersonalCards />
            </CommonBlock>
            <CommonBlock name="pricelist">
                <PriceList />
            </CommonBlock>
            <CommonBlock name="reviews">
                <Reviews />
            </CommonBlock>
            <CommonBlock name="contacts">
                <Contacts />
            <Developer/>
            </CommonBlock>
        </>
    );
};

export default Main;
