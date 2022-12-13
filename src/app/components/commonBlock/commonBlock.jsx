import React, { useEffect, useRef, useState } from "react";
import AnchorPoint from "../common/anchorPoint";
import blockObserve from "../../utils/blockObserve";
import classes from "./commonBlock.module.css";

const CommonBlock = ({ addingClass, title, children }) => {
    const [wipeClass, setWipeClass] = useState("hideCommon");
    const [backIngClass, setBackImgClass] = useState("hidden");
    const wipingBlock = useRef();
    function showBlocks() {
        setWipeClass("showCommon");
        if (addingClass === "reviews") {
            setBackImgClass("");
            setTimeout(() => {
                setBackImgClass(classes.showBackImageBlock);
            }, 20);
        }
    }
    useEffect(() => {
        blockObserve(wipingBlock.current, showBlocks);
    }, []);
    return (
        <div className={classes.commonBlock + " " + classes[addingClass]}>
            {addingClass === "reviews" && (
                <div
                    className={classes.backImageBlock + " " + backIngClass}
                ></div>
            )}
            <AnchorPoint anchor={addingClass} />
            <h2 className={classes.title}>{title}</h2>
            <div
                className={classes[addingClass + "__content"] + " " + wipeClass}
                ref={wipingBlock}
            >
                {children}
            </div>
        </div>
    );
};

export default CommonBlock;
