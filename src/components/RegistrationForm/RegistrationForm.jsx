import React, { useState } from "react";
import css from "./RegistrationForm.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationValidationSchema } from "../../validation/registrationValidationShema";



const RegistrationForm = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registrationValidationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={css.container}>
      <button className={css.closeBtn} type="button" onClick={onClose}>
        <svg className={css.closeIcon} width="32px" height="32px">
          <use xlinkHref={`${sprite}#x`} />
        </svg>
      </button>
      <h1 className={css.title}>Registration</h1>
      <p className={css.text}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>

      <form className={css.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputWrapper}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                className={css.loginInput}
                type="text"
                placeholder="Name"
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
                className={css.loginInput}
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
            name="password"
            control={control}
            render={({ field }) => (
              <input
                className={css.loginInput}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...field}
              />
            )}
          />
          <svg
            className={css.passwordToggleIcon}
            onClick={togglePasswordVisibility}
            width="20px"
            height="20px"
          >
            <use xlinkHref={`${sprite}#${showPassword ? "eye" : "eye-off"}`} />
          </svg>
          {errors.password && (
            <div className={css.error}>{errors.password.message}</div>
          )}
        </div>

        <button type="submit" className={css.button} disabled={isSubmitting}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
