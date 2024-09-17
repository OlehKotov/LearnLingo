import { useEffect, useState } from "react";
import css from "./TeacherCard.module.css";
import sprite from "../../assets/icons/sprite.svg";
import Levels from "../Levels/Levels";
import ReadMore from "../ReadMore/ReadMore";
import HeardButton from "../HearButton/HeardButton";
import { selectFavoriteTeachers } from "../../redux/selectors";
import { useSelector } from "react-redux";

const TeacherCard = ({ teacher }) => {
  // const [isFavorite, setIsFavorite] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  // const [favoriteKey, setFavoriteKey] = useState(null);
  const favoriteTeachers = useSelector(selectFavoriteTeachers);
  const [isFavorite, setIsFavorite] = useState(false);

  // const { isAuth, email } = useAuth();
  useEffect(() => {
    setIsFavorite(favoriteTeachers.some(favTeacher => favTeacher.id === teacher.id));
  }, [favoriteTeachers, teacher.id]);

  const {
    id,
    name,
    surname,
    languages,
    levels,
    rating,
    reviews,
    price_per_hour,
    lessons_done,
    avatar_url,
    lesson_info,
    conditions,
    experience,
  } = teacher;

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li className={`${css.card} ${isExpanded ? css.expanded : ""}`}>
      <div className={css.avatarContainer}>
        <img src={avatar_url} alt="avatar" className={css.avatar} />
        <svg width="12px" height="12px" className={css.isOnline}>
          <use xlinkHref={`${sprite}#icon-Group`} />
        </svg>
      </div>
      <div>
        <div className={css.languagesContainer}>
          <p className={css.languagesText}>Languages</p>
          <ul className={css.languagesList}>
            <li className={css.languagesItem}>
              <svg width="16px" height="16px">
                <use
                  xlinkHref={`${sprite}#book-open-01`}
                  className={css.bookIcon}
                />
              </svg>
              Lessons online
            </li>
            <li className={css.languagesItem}>Lessons done: {lessons_done}</li>
            <li className={css.languagesItem}>
              <svg width="16px" height="16px">
                <use
                  xlinkHref={`${sprite}#icon-star`}
                  className={css.bookIcon}
                />
              </svg>
              Rating: {rating}
            </li>
            <li className={css.languagesItem}>
              Price / 1 hour: <span>{price_per_hour}$</span>
            </li>
          </ul>
          <HeardButton teacher={teacher}/>
        </div>
        <p className={css.name}>
          {name} {surname}
        </p>
        <ul className={css.teacherInfoList}>
          <li className={css.teacherInfoItem}>
            <div className={css.teacherInfoName}>Speaks:</div>
            <div className={css.teacherInfo}>
              {languages.map((language, index) => (
                <span key={index} className={css.language}>
                  {index === 0 ? language : `, ${language}`}
                </span>
              ))}
            </div>
          </li>
          <li className={css.teacherInfoItem}>
            <div className={css.teacherInfoName}>Lesson Info:</div>
            <div className={css.teacherInfo}>{lesson_info}</div>
          </li>
          <li className={css.teacherInfoItem}>
            <div className={css.teacherInfoName}>Conditions:</div>
            <div className={css.teacherInfo}>{conditions}</div>
          </li>
        </ul>
        {!isExpanded && (
          <button className={css.readMoreBtn} onClick={handleReadMore}>
            Read more
          </button>
        )}
        {!isExpanded && <Levels levels={levels} />}
        {isExpanded && <ReadMore teacher={teacher} />}
      </div>
    </li>
  );
};

export default TeacherCard;
