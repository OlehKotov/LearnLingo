import React from "react";
import css from "./Main.module.css";

const Main = () => {
  return (
    <section className={css.main}>
      <div className={css.getBlock}>
        <h1 className={css.getBlockHeader}>Unlock your potential with the best <span className={css.getBlockSpan}>language</span> tutors</h1>
        <p className={css.getBlockText}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <button className={css.getBlockButton}>Get started</button>
      </div>
      <div className={css.imageBlock}>
        <img src="/src/assets/images/lion.png" alt="Lion" className={css.imageBlockLion}/>
        <img src="/src/assets/images/macbook.png" alt="Macbook" className={css.imageBlockMacbook}/>
      </div>
    </section>
  );
};

export default Main;
