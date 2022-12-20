import React, { useState } from "react";
import classes from "./pricelists.module.css";
import caretDown from "../common/svg/caretDown";
import caretRight from "../common/svg/caretRight";
// import stomatologyPrices, { st, pr, cd, re } from "../../data/stomatologyPrices";
import stomatologyPrices from "../../data/stomatologyPrices";

const Stomatology = () => {
    // re(st, pr, cd);
    const initialState = stomatologyPrices.map((cat) => ({
        isOpen: false,
        _id: cat._id
    }));

    const [isCatOpen, setIsCatOpen] = useState(initialState);
    const isOpenCatChange = (id) => {
        setIsCatOpen((prevState) =>
            prevState.map((item) =>
                item._id === id ? { ...item, isOpen: !item.isOpen } : item
            )
        );
    };
    return (
        <div className={classes.mainWrap}>
            <div className={classes.title + " " + classes.alwaysDisplayed}>Стоматология</div>
            <div className={classes.subtitle + " " + classes.alwaysDisplayed}>прайс-лист</div>
            <div className={classes.listHeader + " " + classes.static}>
                <div className={classes.nameTitle}>Услуга</div>
                <div className={classes.priceAndActionWrap}>
                    <div className={classes.priceTitle}>Цена (руб.)</div>
                </div>
            </div>
            <ul className={classes.pricelist}>
                {stomatologyPrices.map(({ cat_name, _id, value }) => {
                    const isOpen = isCatOpen.find(
                        (item) => item._id === _id
                    ).isOpen;
                    return (
                        <ul key={_id}>
                            <div
                                className={classes.catBlock}
                                onClick={() => {
                                    isOpenCatChange(_id);
                                }}
                            >
                                {cat_name} {isOpen ? caretDown : caretRight}
                            </div>
                            {isOpen &&
                                value.map(({ name, _id, price }) => (
                                    <li key={_id} className={classes.static}>
                                        <div
                                            className={
                                                classes.name +
                                                " " +
                                                (price === null
                                                    ? classes.subcatStatic
                                                    : "")
                                            }
                                        >
                                            {name}
                                        </div>
                                        <div
                                            className={
                                                classes.priceAndActionWrap
                                            }
                                        >
                                            <div className={classes.price}>
                                                {price}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    );
                })}
            </ul>
        </div>
    );
};

export default Stomatology;
