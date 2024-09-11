import axios from "axios";
import React, { useEffect, useState } from "react";
import css from "./TeachersList.module.css";
import TeacherCard from "../TeacherCard/TeacherCard";

const TeachersList = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://learnlingo-5802e-default-rtdb.firebaseio.com/teachers.json"
        );
        const data = response.data;

        if (data) {
          const fetchedTeachers = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value,
          }));
          setTeachers(fetchedTeachers);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  if (loading && teachers.length === 0) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section className={css.section}>
      <ul className={css.teachersList}>
        {teachers.length > 0 ? (
          teachers
            .slice(0, visibleCount)
            .map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))
        ) : (
          <div className={css.noResults}>No teachers found</div>
        )}
      </ul>
      {visibleCount < teachers.length && (
        <button className={css.loadMoreButton} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </section>
  );
};

export default TeachersList;
