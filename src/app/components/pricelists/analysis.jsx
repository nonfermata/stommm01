import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./pricelists.module.css";
import {
    getAnalysis,
    toggleAddedAnalysis,
    toggleOpenedCategory
} from "../../../redux/analysisReducer";
import addedToList from "../common/svg/addedToList";
import addToList from "../common/svg/addToList";
import caretDown from "../common/svg/caretDown";
import caretRight from "../common/svg/caretRight";
import options from "../../data/options";
import TotalPriceFixedBlock from "./totalPriceFixedBlock";
import { Link } from "react-router-dom";

const Analysis = () => {
    const dispatch = useDispatch();
    const analysis = useSelector(getAnalysis());
    // To make all prices higher for 50RUB
    // const newArr = analysis.map((item) => ({
    //     ...item,
    //     value: item.value.map((item2) => ({
    //         ...item2,
    //         value: item2.value.map((item3) => ({
    //             ...item3,
    //             price: item3.price + 50
    //         }))
    //     }))
    // }));
    // console.log(JSON.stringify(newArr));
    const myListTitle = options.find((item) => item.id === "selected").name;
    const [myList, setMyList] = useState();
    const [fixedBlockClass, setFixedBlockClass] = useState("");
    useEffect(() => {
        const newList = [];
        for (const cat of analysis) {
            for (const subcat of cat.value) {
                for (const item of subcat.value) {
                    if (item.isAdded) {
                        newList.push(item);
                    }
                }
            }
        }
        setMyList(newList);
        setFixedBlockClass("");
        setTimeout(() => {
            setFixedBlockClass(classes.fixedBlockHidden);
        }, 2000);
    }, [analysis]);

    let totalPrice = 0;
    if (myList && myList.length > 0) {
        totalPrice = myList.reduce((acc, item) => acc + item.price, 0);
    }
    return (
        <div className={classes.mainWrap}>
            {totalPrice > 0 && (
                <TotalPriceFixedBlock
                    fixedBlockClass={fixedBlockClass}
                    totalPrice={totalPrice}
                />
            )}
            <div className={classes.title}>Медицинские анализы</div>
            <div className={classes.subtitle}>прайс-лист</div>
            <div className={classes.subTitleTop}>
                Выберите нужные вам исследования и узнайте общую стоимость.
                Посмотреть список выбранного вы можете в разделе{" "}
                <Link to="/selected" className={classes.spanLink}>
                    "{myListTitle}"
                </Link>
            </div>
            <div className={classes.listHeader}>
                <div className={classes.nameTitle}>Исследование</div>
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
                {analysis.map(
                    ({ cat_name, _id, value, description, isOpen }) => (
                        <ul key={_id}>
                            <div
                                className={classes.catBlock}
                                onClick={() => {
                                    dispatch(toggleOpenedCategory(_id));
                                }}
                            >
                                {cat_name} {isOpen ? caretDown : caretRight}
                                <br />
                                {description && isOpen && (
                                    <span
                                        className={classes.smallerDescription}
                                    >
                                        ({description})
                                    </span>
                                )}
                            </div>
                            {isOpen &&
                                value.map(
                                    ({
                                        subcat_name,
                                        _id,
                                        value,
                                        description
                                    }) => (
                                        <ul key={_id}>
                                            {subcat_name !== "Общее" && (
                                                <div
                                                    className={
                                                        classes.subcatBlock
                                                    }
                                                >
                                                    {subcat_name}
                                                    <br />
                                                    {description && (
                                                        <span
                                                            className={
                                                                classes.smallerDescription
                                                            }
                                                        >
                                                            ({description})
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                            {value.map(
                                                ({
                                                    name,
                                                    _id,
                                                    isAdded,
                                                    price
                                                }) => (
                                                    <li
                                                        key={_id}
                                                        onClick={() => {
                                                            dispatch(
                                                                toggleAddedAnalysis(
                                                                    _id
                                                                )
                                                            );
                                                        }}
                                                    >
                                                        <div
                                                            className={
                                                                classes.name
                                                            }
                                                        >
                                                            {name}
                                                        </div>
                                                        <div
                                                            className={
                                                                classes.priceAndActionWrap
                                                            }
                                                        >
                                                            <div
                                                                className={
                                                                    classes.price
                                                                }
                                                            >
                                                                {price}
                                                            </div>
                                                            <div
                                                                title={
                                                                    isAdded
                                                                        ? "Убрать услугу"
                                                                        : "Добавить услугу"
                                                                }
                                                                className={
                                                                    classes.btn +
                                                                    " " +
                                                                    (isAdded
                                                                        ? classes.btnAdded
                                                                        : "")
                                                                }
                                                            >
                                                                {isAdded
                                                                    ? addedToList
                                                                    : addToList}
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )
                                )}
                        </ul>
                    )
                )}
            </ul>
            <div className={classes.subTitleBottom}>
                <Link to="/selected" className={classes.spanLink}>
                    Перейти в "{myListTitle}"
                </Link>
            </div>
        </div>
    );
};

export default Analysis;
