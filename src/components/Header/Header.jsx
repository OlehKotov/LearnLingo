import AuthButtons from "../AuthButtons/AuthButtons";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <Logo />
      <Navigation />
      <AuthButtons />
    </header>
  );
};

export default Header;
