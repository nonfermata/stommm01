import React, { useEffect, useRef, useState } from "react";
import AnchorPoint from "../common/anchorPoint";
import blockObserve from "../../utils/blockObserve";
import classes from "./commonBlock.module.css";
import menu from "../../data/menu";

const CommonBlock = ({ name, children }) => {
    const menuItem = menu.find((item) => item.anchor === name);
    const title = menuItem.title_name || menuItem.menu_name;
    const [wipeClass, setWipeClass] = useState(
        localStorage.getItem(name) || "hideCommon"
    );
    const [backIngClass, setBackImgClass] = useState("hidden");
    const wipingBlock = useRef();
    function showBlocks() {
        if (!localStorage.getItem(name)) {
            setWipeClass("showCommon");
            localStorage.setItem(name, "showCommon");
        }
        if (name === "reviews") {
            setBackImgClass("");
            setTimeout(() => {
                setBackImgClass(classes.showBackImageBlock);
            }, 1000);
        }
    }
    useEffect(() => {
        blockObserve(wipingBlock.current, showBlocks);
    }, []);
    return (
        <div className={classes.commonBlock + " " + classes[name]}>
            {name === "reviews" && (
                <div
                    className={classes.backImageBlock + " " + backIngClass}
                ></div>
            )}
            <AnchorPoint anchor={name} />
            <h2 className={classes.title}>{title}</h2>
            <div
                className={classes[name + "__content"] + " " + wipeClass}
                ref={wipingBlock}
            >
                {children}
            </div>
        </div>
    );
};

export default CommonBlock;
