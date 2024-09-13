import { useState } from "react";
import css from "./RegistrationForm.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationValidationSchema } from "../../validation/registrationValidationShema";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../../utils/firebaseRegistration";

const RegistrationForm = ({ onClose, onRegistrationSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registrationValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // const onSubmit = async (data) => {
  //   const auth = getAuth();
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(
  //       auth,
  //       data.email,
  //       data.password
  //     );
  //     const user = userCredential.user;

  //     dispatch(
  //       setUser({
  //         name: data.name,
  //         email: user.email,
  //         token: user.accessToken,
  //         id: user.uid,
  //       })
  //     );
  //     onRegistrationSuccess();
  //     reset();
  //   } catch (error) {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     toast.error("Registration error. Try again.");
  //   }
  // };
  const onSubmit = (data) => {
    registerUser(data, dispatch, onRegistrationSuccess, reset);
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
