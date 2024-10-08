import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteTeachers } from "../../redux/selectors";
import css from "./FavoritesList.module.css";
import TeacherCard from "../TeacherCard/TeacherCard";
import { useEffect } from "react";
import { fetchFavoriteTeachers } from "../../redux/favoritesSlice";
import { RotatingLines } from "react-loader-spinner";

const FavoritesList = () => {
  const dispatch = useDispatch();
  const favoriteTeachers = useSelector(selectFavoriteTeachers);
  const email = useSelector((state) => state.user.email);
  const { loading, error } = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(fetchFavoriteTeachers(email));
  }, [dispatch, email]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className={css.section}>
      {loading ? (
        <div className={css.loaderWrapper}>
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul className={css.teachersList}>
          {favoriteTeachers.length > 0 ? (
            favoriteTeachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))
          ) : (
            <div className={css.noResults}>No teachers found</div>
          )}
        </ul>
      )}
    </section>
  );
};

export default FavoritesList;
