import React from "react";
import TeachersList from "../../components/TeachersList/TeachersList";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import Header from "../../components/Header/Header";

const Teachers = () => {
  return (
    <div>
      <Header />
      <DocumentTitle>Teachers Catalog</DocumentTitle>
      <div>
        <TeachersList />
      </div>
    </div>
  );
};

export default Teachers;
