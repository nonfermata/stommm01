import React, { useEffect, useRef, useState } from "react";
import AnchorPoint from "./anchorPoint";
import blockObserve from "../../utils/blockObserve";

const CommonBlockOnly = ({ addingClass, children }) => {
    const [wipeClass, setWipeClass] = useState("hide-common");
    const wipingBlock = useRef();
    useEffect(() => {
        blockObserve(wipingBlock.current, setWipeClass);
    }, []);
    return (
        <div
            className={"common-block-only " + addingClass + " " + wipeClass}
            ref={wipingBlock}
        >
            {children}
        </div>
    );
};

export default CommonBlockOnly;
