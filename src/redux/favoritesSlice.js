import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFavoriteTeachersFromFirebase } from "./favoritesOps";

export const fetchFavoriteTeachers = createAsyncThunk(
  "favorites/fetchFavoriteTeachers",
  async (email) => {
    const teachers = await getFavoriteTeachersFromFirebase(email);
    return teachers;
  }
);

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoriteTeachers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoriteTeachers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavoriteTeachers.fulfilled, (state, action) => {
        state.loading = false;
        state.favoriteTeachers = action.payload;
      })
      .addCase(fetchFavoriteTeachers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default favoritesSlice.reducer;
