import React, { useState } from "react";
import sprite from "../../assets/icons/sprite.svg";
import Levels from "../Levels/Levels";
import css from "./ReadMore.module.css";
import BaseModal from "../../shared/components/BaseModal/BaseModal";
import BookingForm from "../BookingForm/BookingForm";

const ReadMore = ({ teacher }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const {
    levels,
    reviews,
    avatar_url,
    experience,
  } = teacher;

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
      <button className={css.bookTrialLessonBtn} onClick={openModal}>
        Book trial lesson
      </button>
      <BaseModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <BookingForm teacher={teacher} onClose={closeModal} />
      </BaseModal>
    </div>
  );
};

export default ReadMore;
