import React, { useState } from "react";
import classes from "./reviews.module.css";
import reviews from "../../../data/reviews";

const Reviews = () => {
    const [commentsPosition, setCommentsPosition] = useState(0);
    const handleMovePosition = (direction) => {
        setCommentsPosition((prevState) => prevState + 50 * direction);
    };
    return (
        <div className={classes.mainWindow}>
            <div
                className={
                    classes.leftArrow +
                    (commentsPosition === 0 ? " hidden" : "")
                }
                onClick={() => handleMovePosition(1)}
            >
                &#9001;
            </div>
            <div
                className={
                    classes.rightArrow +
                    (commentsPosition === -(reviews.length - 2) * 50
                        ? " hidden"
                        : "")
                }
                onClick={() => handleMovePosition(-1)}
            >
                &#9002;
            </div>
            <div className={classes.reviewsWindow}>
                {" "}
                <div
                    className={classes.reviews}
                    style={{
                        marginLeft: commentsPosition + "%",
                        width: reviews.length * 50 + "%"
                    }}
                >
                    {reviews.map((comment) => (
                        <div key={comment.name} className={classes.reviewWrap}>
                            <div className={classes.review}>
                                <div className={classes.reviewHeaderWrap}>
                                    <img
                                        className={classes.reviewAva}
                                        src={comment.photo}
                                        alt="photo"
                                    />
                                    <div className={classes.reviewName}>
                                        {comment.name}
                                    </div>
                                </div>
                                <div className={classes.reviewContent}>
                                    {comment.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
