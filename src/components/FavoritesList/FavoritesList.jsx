import { useDispatch, useSelector } from "react-redux";
import {
  selectLoading,
  selectError,
  selectFavoriteTeachers,
} from "../../redux/selectors";
import css from "./FavoritesList.module.css";
import TeacherCard from "../TeacherCard/TeacherCard";
import { useAuth } from "../../hooks/use-auth";
import { useEffect } from "react";
import { fetchFavoriteTeachers } from "../../redux/favoritesSlice";
import { removeFavoriteFromUserFirebase } from "../../utils/firebaseRemoveFavorite";
import { getFavoriteTeachersFromFirebase } from "../../redux/favoritesOps";

const FavoritesList = () => {
  const dispatch = useDispatch();
  const { email } = useAuth();
  const favoriteTeachers = useSelector(selectFavoriteTeachers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (email) {
      dispatch(fetchFavoriteTeachers(email));
    }
  }, [dispatch, email]);

  // const handleFavoriteToggle = async (teacherId, isFavorite) => {
  //   try {
  //     if (isFavorite) {
  //       await removeFavoriteFromUserFirebase({ email, teacherId });
  //     } else {
  //       await getFavoriteTeachersFromFirebase(email);
  //     }
  //     dispatch(getFavoriteTeachersFromFirebase(email));
  //   } catch (error) {
  //     console.error("Error updating favorites:", error);
  //   }
  // };
  const handleFavoriteToggle = async (teacherId, isFavorite) => {
    try {
      if (isFavorite) {
        await removeFavoriteFromUserFirebase({ email, teacherId });
      } else {
        await getFavoriteTeachersFromFirebase({ email, teacherId });
      }
      dispatch(fetchFavoriteTeachers(email)); 
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };

  if (loading && favoriteTeachers.length === 0) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className={css.section}>
      <ul className={css.teachersList}>
        {favoriteTeachers.length > 0 ? (
          favoriteTeachers.map((teacher) => (
            <TeacherCard
              key={teacher.id}
              teacher={teacher}
              isFavorite={true}
              onFavoriteToggle={handleFavoriteToggle}
            />
          ))
        ) : (
          <div className={css.noResults}>No teachers found</div>
        )}
      </ul>
    </section>
  );
};

export default FavoritesList;
