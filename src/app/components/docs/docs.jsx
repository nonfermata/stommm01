import React from "react";
import classes from "./docs.module.css";
import rosbotrebMini from "../../assets/docs/miniatures/rospotreb.png";
import prilozhenieMini from "../../assets/docs/miniatures/prilozhenie.png";
import vypiskaMini from "../../assets/docs/miniatures/vypiska.png";
import rosbotreb from "../../assets/docs/rospotreb.png";
import prilozhenie from "../../assets/docs/prilozhenie.png";
import vypiska from "../../assets/docs/vypiska.pdf";
// import { HashLink } from "react-router-hash-link";

const Docs = () => {
    return (
        <div className={classes.mainWrap}>
            <h2 className={classes.title}>Документы</h2>
            <div className={classes.docsWrap}>
                <a
                    rel="noreferrer"
                    target="_blank"
                    className={classes.doc}
                    href={rosbotreb}
                >
                    <img alt="Роспотребадзор" src={rosbotrebMini} />
                    <p>
                        Посмотреть <span className="no_wrap">документ »</span>
                    </p>
                </a>
                <a
                    rel="noreferrer"
                    target="_blank"
                    className={classes.doc}
                    href={prilozhenie}
                >
                    <img alt="Приложение" src={prilozhenieMini} />
                    <p>
                        Посмотреть <span className="no_wrap">документ »</span>
                    </p>
                </a>
                <a
                    rel="noreferrer"
                    target="_blank"
                    className={classes.doc}
                    href={vypiska}
                >
                    <img alt="Выписка" src={vypiskaMini} />
                    <p>
                        Посмотреть <span className="no_wrap">документ »</span>
                    </p>
                </a>
            </div>
            <div className={classes.paidServices}>
                <h4 className={classes.paidServicesTitle}>Платные услуги</h4>
                <p className={classes.paidServicesSubtitle}>
                    Правовые основы оказания платных медицинских
                    стоматологических услуг в ООО “МеДДента”:
                </p>
                <ul className={classes.paidServicesUl}>
                    <li>Конституция РФ;</li>
                    <li>Гражданский кодекс РФ;</li>
                    <li>
                        Федеральный закон от 21.11.2011 г. № 323-ФЗ “Об основах
                        охраны здоровья граждан в РФ”;
                    </li>
                    <li>
                        Закон РФ от 07.02.1992 г. № 2300-1 “О защите прав
                        потребителей”;
                    </li>
                    <li>
                        Постановление Правительства РФ от 04.10. 2012г. № 1006 ”
                        Об утверждении Правил предоставления медицинскими
                        организациями платных медицинских услуг”;
                    </li>
                    <li>Устав ООО “МеДДента”;</li>
                    <li>
                        Лицензия МЗ МО на осуществление медицинской деятельности
                        № ЛО-50-01-006161 от 22.01.2015 г.;
                    </li>
                    <li>
                        иные нормативно-правовые акты РФ и Московской области.
                    </li>
                </ul>
                <p className={classes.paidServicesSubtitle}>
                    Перечень предоставляемых платных медицинских
                    стоматологических услуг в ООО “МеДДента” При осуществлении
                    доврачебной медицинской помощи по:
                </p>
                <ul className={classes.paidServicesUl}>
                    <li>рентгенологии</li>
                </ul>
                <p className={classes.paidServicesSubtitle}>
                    При осуществлении амбулаторно-поликлинической помощи,в том
                    числе,специализированной медицинской помощи по:
                </p>
                <ul className={classes.paidServicesUl}>
                    <li>Стоматологии терапевтической</li>
                    <li>Стоматологии хирургической</li>
                    <li>Имплантации зубов</li>
                    <li>Стоматологии ортопедической</li>
                    <li>Стоматологии ортодонтической</li>
                </ul>
                {/*<p className={classes.paidServicesSubtitle}>*/}
                {/*    Посмотреть наш{" "}*/}
                {/*    <HashLink to="/#pricelist">прайс-лист</HashLink>*/}
                {/*</p>*/}
            </div>
        </div>
    );
};

export default Docs;
