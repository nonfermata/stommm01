import React, { useEffect, useState } from "react";
import classes from "./topImageBlock.module.css"

const WipingBlock = ({ children, timeout }) => {
    const [wipeClass, setWipeClass] = useState(classes.wipingHide);
    useEffect(() => {
        setTimeout(() => {
            setWipeClass(classes.wipingShow);
        }, timeout);
    }, []);
    return <div className={wipeClass}>{children}</div>;
};

export default WipingBlock;
