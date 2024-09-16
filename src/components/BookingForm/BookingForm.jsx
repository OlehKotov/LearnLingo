import React from "react";
import css from "./BookingForm.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookValidationSchema } from "../../validation/bookValidationShema";

const BookingForm = ({ teacher, onClose }) => {
  const { name, surname, avatar_url } = teacher;

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(bookValidationSchema),
    defaultValues: {
      name: '', 
      email: '', 
      phone: '', 
      reason: "Career and business",
    },
  });

  const onSubmit = () => {
    reset();
    window.location.reload();
  };

  return (
    <div className={css.container}>
      <button className={css.closeBtn} type="button" onClick={onClose}>
        <svg className={css.closeIcon} width="32px" height="32px">
          <use xlinkHref={`${sprite}#x`} />
        </svg>
      </button>
      <h1 className={css.title}>Book trial lesson</h1>
      <p className={css.text}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>

      <div className={css.teacherContainer}>
        <img src={avatar_url} alt="avatar" className={css.avatar} />
        <div>
          <p className={css.teacherHeader}>Your teacher</p>
          <p className={css.teacherName}>
            {name} {surname}
          </p>
        </div>
      </div>

      <form className={css.bookingForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.radioWrapper}>
          <ul className={css.radioList}>
            <li className={css.radioItemWrap}>
              <input
                type="radio"
                id="option1"
                value="Career and business"
                {...register("reason")}
              />
              <label htmlFor="option1" className={css.customRadio}>
                <span className={css.radioItem}>Career and business</span>
              </label>
            </li>
            <li className={css.radioItemWrap}>
              <input
                type="radio"
                id="option2"
                value="Lesson for kids"
                {...register("reason")}
              />
              <label htmlFor="option2" className={css.customRadio}>
                <span className={css.radioItem}>Lesson for kids</span>
              </label>
            </li>
            <li className={css.radioItemWrap}>
              <input
                type="radio"
                id="option3"
                value="Living abroad"
                {...register("reason")}
              />
              <label htmlFor="option3" className={css.customRadio}>
                <span className={css.radioItem}>Living abroad</span>
              </label>
            </li>
            <li className={css.radioItemWrap}>
              <input
                type="radio"
                id="option4"
                value="Exams and coursework"
                {...register("reason")}
              />
              <label htmlFor="option4" className={css.customRadio}>
                <span className={css.radioItem}>Exams and coursework</span>
              </label>
            </li>
            <li className={css.radioItemWrap}>
              <input
                type="radio"
                id="option5"
                value="Culture, travel or hobby"
                {...register("reason")}
              />
              <label htmlFor="option5" className={css.customRadio}>
                <span className={css.radioItem}>Culture, travel or hobby</span>
              </label>
            </li>
          </ul>
          {errors.reason && (
            <div className={css.error}>{errors.reason.message}</div>
          )}
        </div>

        <div className={css.inputContainer}>
          <div className={css.inputWrapper}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  className={css.bookingInput}
                  type="text"
                  placeholder="Full Name"
                  {...field}
                />
              )}
            />
            {errors.name && (
              <div className={css.error}>{errors.name.message}</div>
            )}
          </div>

          <div className={css.inputWrapper}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  className={css.bookingInput}
                  type="email"
                  placeholder="Email"
                  {...field}
                />
              )}
            />
            {errors.email && (
              <div className={css.error}>{errors.email.message}</div>
            )}
          </div>

          <div className={css.inputWrapper}>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input
                  className={css.bookingInput}
                  type="text"
                  placeholder="Phone number"
                  {...field}
                />
              )}
            />
            {errors.phone && (
              <div className={css.error}>{errors.phone.message}</div>
            )}
          </div>
        </div>

        <button type="submit" className={css.button} disabled={isSubmitting}>
          Book
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
