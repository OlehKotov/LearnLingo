import React from 'react'
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <a href='' className={css.logo}>
        <img src='/src/assets/images/ukrain.png' alt='Ukraine'/>
        <p className={css.text}>LearnLingo</p>
    </a>
  )
}

export default Logo