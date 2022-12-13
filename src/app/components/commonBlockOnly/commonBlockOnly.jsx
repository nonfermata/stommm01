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
        <div className={classes.commonBlockOnly}>
            <div className={classes[wrapClass] + " " + wipeClass} ref={wipingBlock}>
                {children}
            </div>
        </div>
    );
};

export default CommonBlockOnly;
