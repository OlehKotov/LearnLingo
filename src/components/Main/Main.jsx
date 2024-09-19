import React from "react";
import css from "./Main.module.css";
import { NavLink } from "react-router-dom";
import lion from "../../assets/images/lion.png";
import macbook from "../../assets/images/macbook.png";

const Main = () => {
  return (
    <section className={css.main}>
      <div className={css.getBlock}>
        <h1 className={css.getBlockHeader}>
          Unlock your potential with the best{" "}
          <span className={css.getBlockSpan}>language</span> tutors
        </h1>
        <p className={css.getBlockText}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <NavLink to="/teachers" className={css.getBlockButton}>
          Get started
        </NavLink>
      </div>
      <div className={css.imageBlock}>
        <img src={lion} alt="Lion" className={css.imageBlockLion} />
        <img src={macbook} alt="Macbook" className={css.imageBlockMacbook} />
      </div>
    </section>
  );
};

export default Main;
