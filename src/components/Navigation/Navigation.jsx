import React from "react";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import clsx from "clsx";

const Navigation = () => {
  const { isAuth } = useAuth();

  const linkActive = ({ isActive }) => clsx(css.link, isActive && css.active);

  return (
    <div className={css.navigation}>
      <NavLink to="/" className={linkActive}>
        Home
      </NavLink>
      <NavLink to="/teachers" className={linkActive}>
        Teachers
      </NavLink>
      {isAuth && (
        <NavLink to="/favorites" className={linkActive}>
          Favorites
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
