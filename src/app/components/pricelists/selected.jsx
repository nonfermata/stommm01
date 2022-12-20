import React, { useEffect, useState } from "react";
import classes from "./pricelists.module.css";
import { isAddedChange } from "../../../redux/analysisPricesReducer";
import { connect } from "react-redux";
import MyListItem from "./myListItem";
import addToList from "../common/svg/addToList";
import options from "../../data/options";
import { Link } from "react-router-dom";

const Selected = ({ analysisPrices, isAddedChange }) => {
    const servicesTitle = options.find((item) => item.id === "selected").name;
    const [myList, setMyList] = useState();
    useEffect(() => {
        const newList = [];
        for (const cat of analysisPrices) {
            for (const subcat of cat.value) {
                for (const item of subcat.value) {
                    if (item.isAdded) {
                        newList.push(item);
                    }
                }
            }
        }
        setMyList(newList);
    }, [analysisPrices]);
    let totalPrice;
    if (myList && myList.length > 0) {
        totalPrice = myList.reduce((acc, item) => acc + item.price, 0);
    }
    return (
        <div className={classes.mainWrap}>
            <div className={classes.title}>{servicesTitle}</div>
            <div className={classes.subtitle}></div>
            {myList && myList.length > 0 ? (
                <>
                    <div className={classes.subTitleTop}>
                        Вы добавили следующие исследования:
                    </div>
                    <ul className={classes.pricelist}>
                        {myList.map(({ name, price, _id }) => (
                            <MyListItem
                                key={_id}
                                name={name}
                                price={price}
                                id={_id}
                                onClick={isAddedChange}
                            />
                        ))}
                    </ul>
                    <div className={classes.listFooter}>
                        <div className={classes.nameTitle}>Итого:</div>
                        <div className={classes.priceAndActionWrap}>
                            <div className={classes.priceTitle}>
                                {totalPrice} руб.
                            </div>
                            <button
                                disabled
                                style={{ opacity: "0", cursor: "default" }}
                                className={classes.btn}
                            >
                                {addToList}
                            </button>
                        </div>
                    </div>
                    <div
                        className={classes.subTitleBottom}
                        style={{ margin: "20px 0 0 0" }}
                    >
                        <Link to="/analysis" className={classes.spanLink}>
                            Добавить другие исследования
                        </Link>
                    </div>
                </>
            ) : (
                <div className={classes.subTitleTop}>
                    Вы пока ничего не выбрали.
                    <br />
                    Зайдите в наш{" "}
                    <Link to="/analysis" className={classes.spanLink}>
                        онлайн-калькулятор
                    </Link>{" "}
                    и выберите исследования, которые вам нужны.
                </div>
            )}
        </div>
    );
};

const mapStateToProps = ({ analysisPrices }) => ({
    analysisPrices
});

const mapDispatchToProps = { isAddedChange };

export default connect(mapStateToProps, mapDispatchToProps)(Selected);
