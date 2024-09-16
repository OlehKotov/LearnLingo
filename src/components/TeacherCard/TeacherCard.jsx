import { useEffect, useState } from "react";
import css from "./TeacherCard.module.css";
import sprite from "../../assets/icons/sprite.svg";
import Levels from "../Levels/Levels";
import ReadMore from "../ReadMore/ReadMore";
import { useAuth } from "../../hooks/use-auth";
import { toast } from "react-toastify";
import { addFavoriteToUserFirebase } from "../../utils/firebaseAddtoFavorite";
import { database } from "../../firebase";
import { equalTo, get, orderByChild, query, ref } from "firebase/database";
import { removeFavoriteFromUserFirebase } from "../../utils/firebaseRemoveFavorite";

const TeacherCard = ({ teacher, onFavoriteToggle }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [favoriteKey, setFavoriteKey] = useState(null);

  const { isAuth, email } = useAuth();

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

  useEffect(() => {
    const checkFavorite = async () => {
      if (isAuth) {
        try {
          const usersRef = ref(database, "users");
          const userQuery = query(
            usersRef,
            orderByChild("email"),
            equalTo(email)
          );
          const snapshot = await get(userQuery);
          if (snapshot.exists()) {
            const userData = snapshot.val();
            const userId = Object.keys(userData)[0];
            const favoritesRef = ref(database, `users/${userId}/favorites`);
            const favoriteQuery = query(
              favoritesRef,
              orderByChild("teacherId"),
              equalTo(id)
            );
            const favoriteSnapshot = await get(favoriteQuery);
            if (favoriteSnapshot.exists()) {
              setIsFavorite(true);
              setFavoriteKey(Object.keys(favoriteSnapshot.val())[0]);
            }
          }
        } catch (error) {
          console.error("Error checking favorite:", error);
        }
      }
    };

    checkFavorite();
  }, [email, id, isAuth]);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handleToggleFavorite = async () => {
    if (!isAuth) {
      toast.error("You must be logged in to add favorites");
      return;
    }

    try {
      if (isFavorite) {
        await removeFavoriteFromUserFirebase(email, id);
        setIsFavorite(false);
        toast.success("Teacher removed from favorites!");
        setFavoriteKey(null);
      } else {
        const favoriteData = {
          teacherId: id,
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
        };

        const result = await addFavoriteToUserFirebase(email, favoriteData);
        setIsFavorite(true);
        toast.success("Teacher added to favorites!");
        setFavoriteKey(result.id);
      }

      if (onFavoriteToggle) {
        onFavoriteToggle(id);
      }
    } catch (error) {
      toast.error("Failed to update favorite");
      console.error("Error updating favorite:", error);
    }
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
          <button
            className={css.heardBtn}
            type="button"
            onClick={handleToggleFavorite}
          >
            <svg className={css.favoriteToggleIcon} width="24px" height="24px">
              <use
                xlinkHref={`${sprite}#${isFavorite ? "icon-hover" : "normal"}`}
              />
            </svg>
          </button>
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
