import React from "react";
import classes from "./contacts.module.css";
import YandexMap from "./yandexMap";
import instaLogo from "../../../assets/images/insta_logo.png";
import telegramLogo from "../../../assets/images/telegram_logo.png";
import contacts from "../../../data/contacts";
import CommonBtn from "../../common/commonBtn";

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
            <div className={classes.contactsItem}>
                <div className={classes.itemKey}>E-mail:</div>
                <div>
                    <a href={"mailto: " + contacts.email}>{contacts.email}</a>
                </div>
            </div>
            <div className={classes.socialWrap}>
                <a
                    href="https://www.instagram.com/meddenta_klin/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className={classes.socialLogo}
                        src={instaLogo}
                        alt="Instagram"
                        title="Мы в Instagram"
                    />
                </a>
                <p>
                    <a
                        href="https://www.instagram.com/meddenta_klin/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Мы в Instagram
                    </a>
                </p>
            </div>
            <div className={classes.socialWrap}>
                <a
                    href="https://t.me/meddenta_klin"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className={classes.socialLogo}
                        src={telegramLogo}
                        alt="Telegram"
                        title="Мы в Telegram"
                    />
                </a>
                <p>
                    <a
                        href="https://t.me/meddenta_klin"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Мы в Telegram
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
