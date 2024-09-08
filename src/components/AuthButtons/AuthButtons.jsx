import React from "react";
import sprite from "../../assets/icons/sprite.svg";
import css from "./AuthButtons.module.css";

const AuthButtons = () => {
  return (
    <div className={css.authButtonsWrap}>
      <button className={css.loginButton}>
        <svg width="20px" height="20px" className={css.loginButtonSvg}>
          <use xlinkHref={`${sprite}#log-in`} />
        </svg>
        Log in
      </button>
      <button className={css.registrationButton}>Registration</button>
    </div>
  );
};

export default AuthButtons;
