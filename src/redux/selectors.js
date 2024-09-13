import { createSelector } from "@reduxjs/toolkit";

export const selectTeachersState = (state) => state.teachers;

export const selectTeachers = createSelector(
  selectTeachersState,
  (teachersState) => teachersState.data
);

export const selectLoading = createSelector(
  selectTeachersState,
  (teachersState) => teachersState.loading
);

export const selectError = createSelector(
  selectTeachersState,
  (teachersState) => teachersState.error
);

export const selectVisibleCount = createSelector(
  selectTeachersState,
  (teachersState) => teachersState.visibleCount
);

export const selectUser = (state) => state.user.user;


