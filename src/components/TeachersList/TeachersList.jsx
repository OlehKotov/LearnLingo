import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import {
  selectTeachers,
  selectLoading,
  selectError,
  selectLastKey,
  selectHasFetched,
} from "../../redux/selectors";
import { fetchTeachers } from "../../redux/teachersOps";
import css from "./TeachersList.module.css";
import TeacherCard from "../TeacherCard/TeacherCard";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";

const TeachersList = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const lastKey = useSelector(selectLastKey);
  const hasFetched = useSelector(selectHasFetched);

  const hasFetchedInitialTeachers = useRef(false);

  useEffect(() => {
    if (!hasFetchedInitialTeachers.current && !hasFetched) {
      dispatch(fetchTeachers({ lastKey: null }));
      hasFetchedInitialTeachers.current = true;
    }
  }, [dispatch, hasFetched]);

  const handleLoadMore = () => {
    if (!loading) {
      dispatch(fetchTeachers({ lastKey }));
    }
  };

  if (error) {
    toast.error("Please try again.");
  }

  return (
    <section className={css.section}>
      {loading && teachers.length === 0 && (
        <div className={css.loader}>
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
      )}
      <ul className={css.teachersList}>
        {teachers.length > 0
          ? teachers.map((teacher, index) => (
              <TeacherCard key={index} teacher={teacher} />
            ))
          : !loading && <div className={css.noResults}>No teachers found</div>}
      </ul>
      {teachers.length > 0 && (
        <button
          className={css.loadMoreButton}
          onClick={handleLoadMore}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </section>
  );
};

export default TeachersList;
