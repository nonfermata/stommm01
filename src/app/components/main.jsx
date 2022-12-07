import React from "react";
import TopImageBlock from "./topImageBlock/topImageBlock";
import CommonBlock from "./common/commonBlock";
import CommonBtn from "./common/commonBtn";
import Accordion from "./common/accordion";
import CommonBlockOnly from "./common/commonBlockOnly";
import persons from "../data/persons";
import PersonalCard from "./common/personalCard";

const Main = () => {
    const stomaList = [
        "[стоматология, пункт 1]",
        "[стоматология, пункт 2]",
        "[стоматология, пункт 3]",
        "[. . . . . . . . . . . .]"
    ];
    const cosmeList = [
        "[косметология, пункт 1]",
        "[косметология, пункт 2]",
        "[косметология, пункт 3]",
        "[. . . . . . . . . . . .]"
    ];
    const analizeList = [
        "[анализы, пункт 1]",
        "[анализы, пункт 2]",
        "[анализы, пункт 3]",
        "[. . . . . . . . . . . .]"
    ];
    return (
        <>
            <TopImageBlock />
            <CommonBlock addingClass="about" title="О нас">
                <p className="fs1_1">
                    [ ...любая информация о себе, не очень много и самое
                    важное... центр занимает почетное место среди современных
                    медцентров центров Московской области. У нас самое
                    современное оборудование, квалифицированные специалисты, мы
                    любим свою работу и внимательны к каждому клиенту. Центр был
                    основан в таком-то году, мы такие-то и такие-то, и вот ещё о
                    нас такая-то информация... ]
                </p>
            </CommonBlock>
            <CommonBlock addingClass="services" title="Наши услуги">
                <p className="fs1_1">
                    Мы предлагаем нашим клиентам следующие виды услуг:
                </p>
                <div>
                    <Accordion title="Стоматология" list={stomaList} />
                    <Accordion title="Косметология" list={cosmeList} />
                    <Accordion title="Медицинские анализы" list={analizeList} />
                </div>
                <div className="btn-2">
                    <CommonBtn />
                </div>
            </CommonBlock>
            <CommonBlockOnly addingClass="photoBlockWrap">
                <div className="photoBlock">
                    <div className="photoBlock-1"></div>
                    <div className="photoBlock-2"></div>
                    <div className="photoBlock-3"></div>
                    <div className="photoBlock-4"></div>
                </div>
            </CommonBlockOnly>
            <CommonBlock addingClass="personal" title="Наши специалисты">
                <div className="personalCards">
                    {persons.map(({ name, description, personClass }) => (
                        <PersonalCard
                            personClass={personClass}
                            name={name}
                            desription={description}
                        />
                    ))}
                </div>
            </CommonBlock>
        </>
    );
};

export default Main;
