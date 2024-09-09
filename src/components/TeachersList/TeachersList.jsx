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
            const response = await axios.get('https://learnlingo-5802e-default-rtdb.firebaseio.com/teachers.json');
            const data = response.data;
            
            if (data) {
              setTeachers(Object.values(data));
            }
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };

    fetchData();
  }, []);

  if (loading) {
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
            .map((teacher, index) => (
              <TeacherCard key={index} teacher={teacher} />
            ))
        ) : (
          <div className={css.noResults}>No teachers found</div>
        )}
      </ul>

      
        <button className={css.loadMoreButton}>
          Load more
        </button>
    
    </section>
  );
};

export default TeachersList;
