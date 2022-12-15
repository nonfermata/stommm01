import React, { useEffect, useState } from "react";
import classes from "./calculator.module.css";
import { isAddedChange } from "../../../redux/pricelistReducer";
import { setVisible } from "../../../redux/visibleCompReducer";
import { connect } from "react-redux";
import MyListItem from "./myListItem";
import addToList from "../common/svg/addToList";

const MyList = ({ pricelist, isAddedChange, setVisible }) => {
    const [myList, setMyList] = useState();
    useEffect(() => {
        setMyList(pricelist.filter((item) => item.isAdded));
    }, [pricelist]);
    let totalPrice;
    if (myList && myList.length > 0) {
        totalPrice = myList.reduce((acc, item) => acc + item.price, 0);
    }
    return (
        <div className={classes.mainWrap}>
            <div className={classes.title}>Выбранные услуги</div>
            {myList && myList.length > 0 ? (
                <>
                    <div className={classes.subTitleTop}>
                        Вы добавили следующие услуги:
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
                        <span
                            className={classes.spanLink}
                            onClick={() => setVisible("calculator")}
                        >
                            Добавить ещё услуги
                        </span>
                    </div>
                </>
            ) : (
                <div className={classes.subTitleTop}>
                    Вы пока ничего не выбрали.
                    <br />
                    Зайдите в наш{" "}
                    <span
                        className={classes.spanLink}
                        onClick={() => setVisible("calculator")}
                    >
                        онлайн-калькулятор
                    </span>{" "}
                    и выберите услуги, которые вам нужны.
                </div>
            )}
        </div>
    );
};

const mapStateToProps = ({ pricelist }) => ({
    pricelist
});

const mapDispatchToProps = { isAddedChange, setVisible };

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
