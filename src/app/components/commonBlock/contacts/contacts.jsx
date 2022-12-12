import React from "react";
import classes from "./contacts.module.css";
import YandexMap from "./yandexMap";
import instaLogo from "../../../assets/images/insta_logo.png";
import contacts from "../../../data/contacts";
import CommonBtn from "../../common/commonBtn";
import EmptyBlock from "../../../utils/emptyBlock";

const Contacts = () => {
    return (
        <>
            <div className={classes.contactsItem}>
                <div className={classes.itemKey}>Наш адрес:</div>
                <div>
                    <p>{contacts.address.area},</p>
                    <p>
                        {contacts.address.city}, {contacts.address.street}
                    </p>
                </div>
            </div>
            <div className={classes.contactsItem}>
                <div className={classes.itemKey}>Часы работы:</div>
                <div>
                    {contacts.hours.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            </div>
            <div className={classes.contactsItem}>
                <div className={classes.itemKey}>Телефоны:</div>
                <div>
                    {contacts.phones.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            </div>
            <div className={classes.instaWrap}>
                <a
                    href="https://www.instagram.com/meddenta_klin/"
                    target="_blank"
                >
                    <img
                        className={classes.instaLogo}
                        src={instaLogo}
                        alt="Instagram"
                        title="Мы в Instagram"
                    />
                </a>
                <p>
                    <a
                        href="https://www.instagram.com/meddenta_klin/"
                        target="_blank"
                    >
                        Мы в Instagram
                    </a>
                </p>
            </div>
            <div className={classes.btnWrap}>
                <CommonBtn />
            </div>
            <YandexMap />
        </>
    );
};

export default Contacts;
