import { useEffect, useRef, useState } from "react";
import AuthButtons from "../AuthButtons/AuthButtons";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !event.target.closest(`.${css.burgerButton}`)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={css.header}>
      <Logo />
      <button className={css.burgerButton} onClick={toggleMenu}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div
        className={`${css.menu} ${isMenuOpen ? css.menuOpen : ""}`}
        ref={menuRef}
      >
        <Navigation />
        <AuthButtons />
      </div>
    </header>
  );
};

export default Header;
