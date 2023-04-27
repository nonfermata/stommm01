import React from "react";
import classes from "./pricelists.module.css";
import cosmetologyPricesAng from "../../data/cosmetologyPricesAng";

const CosmetologyAng = () => {
    return (
        <div className={classes.mainWrap}>
            <div className={classes.title + " " + classes.alwaysDisplayed}>
                Косметология
            </div>
            <div className={classes.subtitle + " " + classes.alwaysDisplayed}>
                прайс-лист косметолога <span className="fw500 no_wrap">Волгиной Ангелины</span>
            </div>
            <div className={classes.listHeader + " " + classes.static}>
                <div className={classes.nameTitle}>Услуга</div>
                <div className={classes.priceAndActionWrap}>
                    <div className={classes.priceTitle}>Цена (руб.)</div>
                </div>
            </div>
            <ul className={classes.pricelist}>
                {cosmetologyPricesAng.map(({ name, _id, price }) => (
                    <li key={_id} className={classes.static}>
                        <div
                            className={
                                classes.name +
                                " " +
                                (price === null ? classes.subcatStatic : "")
                            }
                        >
                            {name}
                        </div>
                        <div className={classes.priceAndActionWrap}>
                            <div className={classes.price}>{price}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CosmetologyAng;
