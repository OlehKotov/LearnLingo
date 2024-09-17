export const selectTeachers = (state) => state.teachers.items;
export const selectLoading = (state) => state.teachers.loading;
export const selectError = (state) => state.teachers.error;
export const selectLastKey = (state) => state.teachers.lastKey;
export const selectHasFetched = (state) => state.teachers.hasFetched;
export const selectFavoriteTeachers = (state) => state.favorites.favoriteTeachers;

export const selectUser = (state) => state.user.user;
export const selectUserEmail = (state) => state.user.email;
export const selectUserId = (state) => state.user.id;


