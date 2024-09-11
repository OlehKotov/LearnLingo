import React, { useState } from "react";
import css from "./LoginForm.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { logInValidationschema } from "../../validation/logInValidationShema";

const LoginForm = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(logInValidationschema),
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
      <h1 className={css.title}>Log In</h1>
      <p className={css.text}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a teacher.
      </p>

      <form className={css.loginForm} onSubmit={handleSubmit(onSubmit)}>
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
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
