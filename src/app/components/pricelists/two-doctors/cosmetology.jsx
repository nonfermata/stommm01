import React from "react";
import classes from "./pricelists.module.css";
import {Link} from "react-router-dom";

const Cosmetology = () => {
    return (
        <div className={classes.mainWrap}>
            <div className={classes.title + " " + classes.alwaysDisplayed}>
                Косметология
            </div>
            <Link to="/cosmetology-ann" className={classes.subLink + " " + classes.alwaysDisplayed}>
                Прайс-лист косметолога <span className="fw500 no_wrap">Мачульниковой Анны</span>
            </Link>
            <Link to="/cosmetology-ang" className={classes.subLink + " " + classes.alwaysDisplayed}>
                Прайс-лист косметолога <span className="fw500 no_wrap">Волгиной Ангелины</span>
            </Link>

        </div>
    );
};

export default Cosmetology;
