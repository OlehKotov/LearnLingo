import sprite from "../../assets/icons/sprite.svg";
import css from "./HeardButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteTeachers, selectUserEmail } from "../../redux/selectors";
import {
  addFavoriteTeacher,
  removeFavoriteTeacher,
} from "../../redux/favoritesSlice";
import { useAuth } from "../../hooks/use-auth";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const HeardButton = ({ teacher }) => {
  const dispatch = useDispatch();
  const favoriteTeachers = useSelector(selectFavoriteTeachers);
  const userEmail = useSelector(selectUserEmail);
  const [isHovered, setIsHovered] = useState(false);

  const { isAuth } = useAuth();

  const isFavorite = favoriteTeachers.some(
    (favTeacher) => favTeacher.id === teacher.id
  );

  const [isClicked, setIsClicked] = useState(isFavorite);

  useEffect(() => {
    setIsClicked(isFavorite);
  }, [isFavorite]);

  const handleClick = async () => {
    if (isFavorite) {
      dispatch(
        removeFavoriteTeacher({ email: userEmail, teacherId: teacher.id })
      );
    } else {
      dispatch(addFavoriteTeacher({ email: userEmail, teacher }));
    }
  };

  const handleButtonClick = () => {
    if (!isAuth) {
      toast.error("Please Log in and try again.");
      return;
    }
    setIsClicked(!isClicked);
    handleClick();
  };

  const getIconName = () => {
    if (isClicked) {
      return "icon-hover";
    } else if (isHovered) {
      return "iconizer-heart";
    } else {
      return "normal";
    }
  };

  return (
    <button
      className={css.heardBtn}
      type="button"
      onClick={handleButtonClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg className={css.favoriteToggleIcon} width="24px" height="24px">
        <use xlinkHref={`${sprite}#${getIconName()}`} />
      </svg>
    </button>
  );
};

export default HeardButton;
