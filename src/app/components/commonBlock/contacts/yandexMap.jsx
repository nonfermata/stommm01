import React from 'react';
import classes from "./contacts.module.css";

const YandexMap = () => {
    return (
        <div className={classes.yandexMap}>
            <a
                href="https://yandex.kz/maps/org/meddenta/230737442058/?utm_medium=mapframe&utm_source=maps"
                style={{
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: "0px"
                }}
            >
                МеДДента
            </a>
            <a
                href="https://yandex.kz/maps/10733/klin/category/dental_clinics/184106132/?utm_medium=mapframe&utm_source=maps"
                style={{
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: "14px"
                }}
            >
                Стоматологическая клиника в Клину
            </a>
            <a
                href="https://yandex.kz/maps/10733/klin/category/cosmetology/892508964/?utm_medium=mapframe&utm_source=maps"
                style={{
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: "28px"
                }}
            >
                Косметология в Клину
            </a>
            <iframe
                src="https://yandex.ru/map-widget/v1/-/CCUnMDbf~D"
                // width="560"
                // height="400"
                frameBorder="1"
                allowFullScreen={true}
            ></iframe>
        </div>
    );
};

export default YandexMap;