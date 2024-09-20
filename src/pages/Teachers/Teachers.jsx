import React from "react";
import TeachersList from "../../components/TeachersList/TeachersList";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import Header from "../../components/Header/Header";
import css from "./Teachers.module.css";

const Teachers = () => {
  return (
    <div className={css.teachers}>
      <Header />
      <DocumentTitle>Teachers Catalog</DocumentTitle>
      <div className={css.container}>
        <TeachersList />
      </div>
    </div>
  );
};

export default Teachers;
