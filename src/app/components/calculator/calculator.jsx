import React, { useEffect, useState } from "react";
import classes from "./calculator.module.css";
import { isAddedChange } from "../../../redux/pricelistReducer";
import { connect } from "react-redux";
import addedToList from "../common/svg/addedToList";
import { setVisible } from "../../../redux/visibleCompReducer";
import addToList from "../common/svg/addToList";

const Calculator = ({ pricelist, isAddedChange, setVisible }) => {
    const [myList, setMyList] = useState();
    const [fixedBlockClass, setFixedBlockClass] = useState("");
    useEffect(() => {
        setMyList(pricelist.filter((item) => item.isAdded));
        setFixedBlockClass("");
        setTimeout(() => {
            setFixedBlockClass(classes.fixedBlockHidden);
        }, 1500);
    }, [pricelist]);

    let totalPrice = 0;
    if (myList && myList.length > 0) {
        totalPrice = myList.reduce((acc, item) => acc + item.price, 0);
    }
    const handleClick = (id) => {
        isAddedChange(id);
    };
    return (
        <div className={classes.mainWrap}>
            {totalPrice > 0 && (
                <div
                    className={
                        classes.totalPriceFixedBlock + " " + fixedBlockClass
                    }
                >
                    Выбрано услуг
                    <br />
                    на <span className={classes.totalPrice}>{totalPrice} </span>
                    рублей
                </div>
            )}
            <div className={classes.title}>Калькулятор услуг</div>
            <div className={classes.subTitleTop}>
                Выберите нужные вам услуги.
                <br />
                Посмотреть выбранное, а также общую стоимость, вы можете в
                разделе{" "}
                <span
                    className={classes.spanLink}
                    onClick={() => setVisible("mylist")}
                >
                    "Выбранные услуги"
                </span>
            </div>
            <div className={classes.listHeader}>
                <div className={classes.nameTitle}>Название услуги</div>
                <div className={classes.priceAndActionWrap}>
                    <div className={classes.priceTitle}>Цена (руб.)</div>
                    <button
                        disabled
                        style={{ opacity: "0", cursor: "default" }}
                        className={classes.btn}
                    >
                        {addToList}
                    </button>
                </div>
            </div>
            <ul className={classes.pricelist}>
                {pricelist.map(({ name, price, isAdded, _id }) => (
                    <li key={_id}>
                        <div className={classes.name}>{name}</div>
                        <div className={classes.priceAndActionWrap}>
                            <div className={classes.price}>{price}</div>
                            <div
                                title={
                                    isAdded
                                        ? "Убрать услугу"
                                        : "Добавить услугу"
                                }
                                className={
                                    classes.btn +
                                    " " +
                                    (isAdded ? classes.btnAdded : "")
                                }
                                onClick={() => {
                                    handleClick(_id);
                                }}
                            >
                                {isAdded ? addedToList : addToList}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className={classes.subTitleBottom}>
                    <span
                        className={classes.spanLink}
                        onClick={() => setVisible("mylist")}
                    >
                        Перейти в "Выбранные услуги"
                    </span>
            </div>
        </div>
    );
};

const mapStateToProps = ({ pricelist }) => ({
    pricelist
});

const mapDispatchToProps = { isAddedChange, setVisible };

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
