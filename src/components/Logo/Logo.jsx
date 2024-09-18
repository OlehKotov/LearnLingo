import React from "react";
import css from "./Logo.module.css";
import ukraine from '../../assets/images/ukraine.png';

const Logo = () => {
  return (
    <a href="/" className={css.logo}>
      <img src={ukraine} alt="Ukraine" />
      <p className={css.text}>LearnLingo</p>
    </a>
  );
};

export default Logo;
