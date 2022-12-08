import React from "react";
import Accordion from "./accordion";
import services from "../../../data/services";

const Services = () => {
    return (
        <div>
            {services.map(({ name, list }) => (
                <Accordion key={name} title={name} list={list} />
            ))}
        </div>
    );
};

export default Services;
