import React, { useEffect, useState } from "react";

const WipingBlock = ({ children, timeout }) => {
    const [wipeClass, setWipeClass] = useState("wipingHide");
    useEffect(() => {
        setTimeout(() => {
            setWipeClass("wipingShow");
        }, timeout);
    }, []);
    return <div className={wipeClass}>{children}</div>;
};

export default WipingBlock;
