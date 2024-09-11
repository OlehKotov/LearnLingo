import React, { useState } from "react";
import sprite from "../../assets/icons/sprite.svg";
import css from "./AuthButtons.module.css";
import BaseModal from "../../shared/components/BaseModal/BaseModal";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const AuthButtons = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openLoginForm = () => {
    setModalContent(<LoginForm onClose={closeModal}/>);
    setModalIsOpen(true);
  };

  const openRegistrationForm = () => {
    setModalContent(<RegistrationForm onClose={closeModal}/>);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent(null);
  };

  return (
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
