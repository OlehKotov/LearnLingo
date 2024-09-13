import React, { useState } from "react";
import sprite from "../../assets/icons/sprite.svg";
import css from "./AuthButtons.module.css";
import BaseModal from "../../shared/components/BaseModal/BaseModal";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/userSlice";
import { useAuth } from "../../hooks/use-auth";

const AuthButtons = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const dispatch = useDispatch();

  const handleRegistrationSuccess = () => {
    closeModal();
    toast.success("Registration was successful!");
  };

  const handleLoginSuccess = () => {
    closeModal();
    toast.success("Login was successful!");
  };

  const openLoginForm = () => {
    setModalContent(
      <LoginForm onClose={closeModal} onLoginSuccess={handleLoginSuccess} />
    );
    setModalIsOpen(true);
  };

  const openRegistrationForm = () => {
    setModalContent(
      <RegistrationForm
        onClose={closeModal}
        onRegistrationSuccess={handleRegistrationSuccess}
      />
    );
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent(null);
  };

  const handleLogOut = () => {
    dispatch(removeUser());
    toast.success("Log out was successful!");
    window.location.reload();
  };

  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div className={css.authButtonsWrap}>
      <p className={css.authText}>Welcome {email}!</p>
      <button className={css.loginButton} onClick={handleLogOut}>
        <svg width="20px" height="20px" className={css.loginButtonSvg}>
          <use xlinkHref={`${sprite}#log-in`} />
        </svg>
        Log out
      </button>
    </div>
  ) : (
    <div className={css.authButtonsWrap}>
      <button className={css.loginButton} onClick={openLoginForm}>
        <svg width="20px" height="20px" className={css.loginButtonSvg}>
          <use xlinkHref={`${sprite}#log-in`} />
        </svg>
        Log in
      </button>

      <button className={css.registrationButton} onClick={openRegistrationForm}>
        Registration
      </button>
      <BaseModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {modalContent}
      </BaseModal>
    </div>
  );
};

export default AuthButtons;
