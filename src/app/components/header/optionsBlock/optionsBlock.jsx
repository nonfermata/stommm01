import React from "react";
import classes from "./optionsBlock.module.css";
import { connect } from "react-redux";
import { setVisible } from "../../../../redux/visibleCompReducer";
import { isBurgerActiveChange } from "../../../../redux/isBurgerActiveReducer";
import options from "../../../data/options";

const OptionsBlock = ({
    visibleComp,
    setVisible,
    isBurgerActive,
    isBurgerActiveChange
}) => {
    const handleClick = (comp) => {
        if (isBurgerActive) {
            isBurgerActiveChange();
        }
        if (visibleComp !== comp) {
            setVisible(comp);
        }
    };
    return (
        <div className={classes.optionsBlock}>
            {options.map(({ id, name, icon }) => (
                <div
                    key={id}
                    title={name}
                    className={classes.option}
                    onClick={() => {
                        handleClick(id);
                    }}
                >
                    {icon}
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = ({ visibleComp, isBurgerActive }) => ({
    visibleComp,
    isBurgerActive
});

const mapDispatchToProps = { setVisible, isBurgerActiveChange };

export default connect(mapStateToProps, mapDispatchToProps)(OptionsBlock);
