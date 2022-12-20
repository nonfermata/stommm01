import React from "react";
import classes from "./pricelists.module.css";
import cosmetologyPrices from "../../data/cosmetologyPrices";

const Cosmetology = () => {
    return (
        <div className={classes.mainWrap}>
            <div className={classes.title + " " + classes.alwaysDisplayed}>
                Косметология
            </div>
            <div className={classes.subtitle + " " + classes.alwaysDisplayed}>
                прайс-лист
            </div>
            <div className={classes.listHeader + " " + classes.static}>
                <div className={classes.nameTitle}>Услуга</div>
                <div className={classes.priceAndActionWrap}>
                    <div className={classes.priceTitle}>Цена (руб.)</div>
                </div>
            </div>
            <ul className={classes.pricelist}>
                {cosmetologyPrices.map(({ name, _id, price }) => (
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

export default Cosmetology;
