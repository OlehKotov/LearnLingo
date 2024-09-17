import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <ul className={css.tutorList}>
        <li className={css.tutorItem}>
          <div className={css.tutorCount}>32,000 +</div>
          <div className={css.tutorName}>Experienced tutors</div>
        </li>
        <li className={css.tutorItem}>
          <div className={css.tutorCount}>300,000 +</div>
          <div className={css.tutorName}>5-star tutor reviews</div>
        </li>
        <li className={css.tutorItem}>
          <div className={css.tutorCount}>120 +</div>
          <div className={css.tutorName}>
            Subjects <br /> taught
          </div>
        </li>
        <li className={css.tutorItem}>
          <div className={css.tutorCount}>200 +</div>
          <div className={css.tutorName}>Tutor nationalities</div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
