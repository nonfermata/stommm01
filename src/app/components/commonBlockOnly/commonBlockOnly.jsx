import React, { useEffect, useRef, useState } from "react";
import blockObserve from "../../utils/blockObserve";
import classes from "./commonBlockOnly.module.css";

const CommonBlockOnly = ({ wrapClass, children }) => {
    const [wipeClass, setWipeClass] = useState("hideCommon");
    const wipingBlock = useRef();
    useEffect(() => {
        blockObserve(wipingBlock.current, setWipeClass);
    }, []);
    return (
        <div
            className={classes.commonBlockOnly + " " + classes[wrapClass] + " " + wipeClass}
            ref={wipingBlock}
        >
            {children}
        </div>
    );
};

export default CommonBlockOnly;
