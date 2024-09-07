import React from 'react'
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={css.logo}>
        <img src='/src/assets/images/ukrain.png'/>
        <p className={css.text}>LearnLingo</p>
    </div>
  )
}

export default Logo