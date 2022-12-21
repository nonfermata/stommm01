import React, { useEffect, useState } from "react";
import classes from "./reviews.module.css";
import reviews from "../../../data/reviews";

const Reviews = () => {
    const [commentsPosition, setCommentsPosition] = useState(0);
    const countReviews = reviews.length;
    const [sliderRatio, setSliderRatio] = useState(
        window.innerWidth <= 960 ? 100 : 50
    );
    const handleMovePosition = (direction) => {
        setCommentsPosition((prevState) => prevState + sliderRatio * direction);
    };
    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth <= 960) {
                setSliderRatio(100);
            } else setSliderRatio(50);
            setCommentsPosition(0);
        });
    }, []);
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
                        (commentsPosition === 100 - countReviews * sliderRatio
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
                            width: countReviews * sliderRatio + "%"
                        }}
                    >
                        {reviews.map((comment) => (
                            <div
                                key={comment.name}
                                className={classes.reviewWrap}
                                style={{
                                    width:
                                        (sliderRatio * 2) / countReviews + "%"
                                }}
                            >
                                <div className={classes.review}>
                                    <div className={classes.reviewHeaderWrap}>
                                        {/*<img*/}
                                        {/*    className={classes.reviewAva}*/}
                                        {/*    src={comment.photo}*/}
                                        {/*    alt="photo"*/}
                                        {/*/>*/}
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
