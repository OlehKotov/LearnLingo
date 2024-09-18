import { createSelector } from "@reduxjs/toolkit";

export const selectTeachers = (state) => state.teachers.items;
export const selectLoading = (state) => state.teachers.loading;
export const selectError = (state) => state.teachers.error;
export const selectLastKey = (state) => state.teachers.lastVisible;
export const selectHasFetched = (state) => state.teachers.hasFetched;
export const selectFavoriteTeachers = (state) =>
  state.favorites.favoriteTeachers;

export const selectUser = (state) => state.user.user;
export const selectUserEmail = (state) => state.user.email;
export const selectUserId = (state) => state.user.id;

export const selectFilters = (state) => state.teachers.filters;

export const selectFilteredTeachers = createSelector(
  [selectTeachers, selectFilters],
  (teachers, filters) => {
    const { languages, levels, price_per_hour } = filters;

    return teachers.filter((teacher) => {
      const matchesLanguages =
        !languages ||
        languages.every((lang) => teacher.languages.includes(lang));
      const matchesLevels =
        !levels || levels.every((level) => teacher.levels.includes(level));
      const matchesPrice =
        !price_per_hour || teacher.price_per_hour <= parseInt(price_per_hour);

      return matchesLanguages && matchesLevels && matchesPrice;
    });
  }
);
