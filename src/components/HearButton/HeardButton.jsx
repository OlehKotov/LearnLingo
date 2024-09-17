import sprite from "../../assets/icons/sprite.svg";
import css from "./HeardButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteTeachers, selectUserEmail } from "../../redux/selectors";
import {
  addFavoriteTeacher,
  removeFavoriteTeacher,
} from "../../redux/favoritesSlice";
import { useAuth } from '../../hooks/use-auth';
import { toast } from "react-toastify";

const HeardButton = ({ teacher }) => {
  const dispatch = useDispatch();
  const favoriteTeachers = useSelector(selectFavoriteTeachers);
  const userEmail = useSelector(selectUserEmail);

  const {isAuth} = useAuth();

  const isFavorite = favoriteTeachers.some(
    (favTeacher) => favTeacher.id === teacher.id
  );

  const handleClick = async () => {
    if (!isAuth) {
      toast.error("Please Log in and try again.")
      return;
    }
    if (isFavorite) {
      await dispatch(
        removeFavoriteTeacher({ email: userEmail, teacherId: teacher.id })
      );
    } else {
      await dispatch(addFavoriteTeacher({ email: userEmail, teacher }));
    }
  };

  return (
    <button className={css.heardBtn} type="button" onClick={handleClick}>
      <svg className={css.favoriteToggleIcon} width="24px" height="24px">
        <use xlinkHref={`${sprite}#${isFavorite ? "icon-hover" : "normal"}`} />
      </svg>
    </button>
  );
};

export default HeardButton;
