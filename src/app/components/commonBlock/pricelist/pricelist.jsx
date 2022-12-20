import React from "react";
import classes from "./pricelist.module.css";
import pricelistItems from "../../../data/pricelistItems";
import { setVisible } from "../../../../redux/visibleCompReducer";
import { isBurgerActiveChange } from "../../../../redux/isBurgerActiveReducer";
import { connect } from "react-redux";

const PriceList = ({
    isBurgerActive,
    setVisible,
    isBurgerActiveChange
}) => {
    const handleClick = (comp) => {
        if (isBurgerActive) {
            isBurgerActiveChange();
        }
        setVisible(comp);
    };
    return (
        <div className={classes.pricelistCards}>
            {pricelistItems.map(({ id, name, icon }) => (
                <div
                    key={id}
                    onClick={() => {
                        handleClick(id);
                    }}
                    className={classes.pricelistCard}
                    title={name}
                >
                    <img src={icon} alt="icon" />
                    <div className={classes.priceName}>{name}</div>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = ({ isBurgerActive }) => ({
    isBurgerActive
});

const mapDispatchToProps = { setVisible, isBurgerActiveChange };

export default connect(mapStateToProps, mapDispatchToProps)(PriceList);
