import React from 'react';
import classes from "./photoCollageBlock.module.css";

const PhotoCollageBlock = () => {
    return (
        <div className={classes.photoBlock}>
            <div className={classes.photoBlock1}></div>
            <div className={classes.photoBlock2}></div>
            <div className={classes.photoBlock3}></div>
            <div className={classes.photoBlock4}></div>
        </div>
    );
};

export default PhotoCollageBlock;