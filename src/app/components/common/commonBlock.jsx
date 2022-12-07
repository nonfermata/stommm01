import React, { useEffect, useRef, useState } from "react";
import AnchorPoint from "./anchorPoint";
import blockObserve from "../../utils/blockObserve";

const CommonBlock = ({ addingClass, title, children }) => {
    const [wipeClass, setWipeClass] = useState("hide-common");
    const wipingBlock = useRef();
    useEffect(() => {
        blockObserve(wipingBlock.current, setWipeClass);
    }, []);
    return (
        <div className={"common-block " + addingClass}>
            <AnchorPoint anchor={addingClass} />
            <div
                className={addingClass + "__content " + wipeClass}
                ref={wipingBlock}
            >
                <h2 className="title">{title}</h2>
                {children}
            </div>
        </div>
    );
};

export default CommonBlock;
