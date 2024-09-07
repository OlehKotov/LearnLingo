import React from 'react'
import css from "./Navigation.module.css";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
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