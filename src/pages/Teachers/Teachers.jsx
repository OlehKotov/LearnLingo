import React from 'react'
import TeachersList from '../../components/TeachersList/TeachersList'
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

const Teachers = () => {
  return (
    <div>
      <DocumentTitle>Teachers Catalog</DocumentTitle>
      <TeachersList />
    </div>
  )
}

export default Teachers