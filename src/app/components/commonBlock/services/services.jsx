import React from "react";
import Accordion from "./accordion";
import services from "../../../data/services";
import classes from "./services.module.css";
import CommonBtn from "../../common/commonBtn";

const Services = () => {
    return (
        <div>
            <div className={classes.subtitle}>
                Мы предлагаем нашим клиентам следующие виды услуг:
            </div>
            {services.map(({ name, list }) => (
                <Accordion key={name} title={name} list={list} />
            ))}
            <div className={classes.btnWrap}>
                <CommonBtn />
            </div>
        </div>
    );
};

export default Services;
