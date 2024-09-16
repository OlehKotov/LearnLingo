import React from 'react'
import css from "./Navigation.module.css";
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';

const Navigation = () => {
  const {isAuth} = useAuth();

  return isAuth ? (
    <nav className={css.navigation}>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        <NavLink to="/teachers" className={css.link}>
          Teachers
        </NavLink>
        <NavLink to="/favorites" className={css.link}>
          Favorites
        </NavLink>
      </nav>
  ) : (
    <nav className={css.navigation}>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        <NavLink to="/teachers" className={css.link}>
          Teachers
        </NavLink>
      </nav>
  )
}

export default Navigation