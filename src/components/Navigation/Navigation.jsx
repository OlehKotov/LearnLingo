import React from "react";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

const Navigation = () => {
  const { isAuth } = useAuth();

  return (
    <div className={css.navigation}>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      <NavLink to="/teachers" className={css.link}>
        Teachers
      </NavLink>
      {isAuth && (
        <NavLink to="/favorites" className={css.link}>
          Favorites
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
