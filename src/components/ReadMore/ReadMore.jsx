import React from "react";
import sprite from "../../assets/icons/sprite.svg";
import Levels from "../Levels/Levels";
import css from "./ReadMore.module.css";

const ReadMore = ({ levels, experience, reviews, avatar_url }) => {
  return (
    <div>
      <p className={css.experience}>{experience}</p>
      <div className={css.reviewsContainer}>
        {reviews.map((review, index) => (
          <div key={index} className={css.review}>
            <div className={css.reviewWrapper}>
              <img src={avatar_url} alt="avatar" className={css.reviewAvatar} />
              <div>
                <p className={css.reviewName}>{review.reviewer_name}</p>
                <p className={css.reviewRating}>
                  <svg width="16px" height="16px">
                    <use
                      xlinkHref={`${sprite}#icon-star`}
                      className={css.bookIcon}
                    />
                  </svg>
                  {review.reviewer_rating},0
                </p>
              </div>
            </div>
            <p className={css.reviewComment}>{review.comment}</p>
          </div>
        ))}
      </div>
      <Levels levels={levels} />
      <button className={css.bookTrialLessonBtn}>Book trial lesson</button>
    </div>
  );
};

export default ReadMore;
