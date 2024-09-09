import React from "react";
import css from "./Levels.module.css";

const Levels = ({ levels }) => {
  return (
    <ul className={css.levelList}>
      {levels.length > 0 ? (
        levels.map((level, index) => (
          <li key={index} className={css.levelItem}>
            {level}
          </li>
        ))
      ) : (
        <div className={css.noResults}>No levels found</div>
      )}
    </ul>
  );
};

export default Levels;
