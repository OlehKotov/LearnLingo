import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFavoriteTeachersFromFirebase } from "./favoritesOps";
import { addFavoriteToUserFirebase } from "../utils/firebaseAddtoFavorite";
import { removeFavoriteFromUserFirebase } from "../utils/firebaseRemoveFavorite";

export const fetchFavoriteTeachers = createAsyncThunk(
  "favorites/fetchFavoriteTeachers",
  async (email) => {
    const teachers = await getFavoriteTeachersFromFirebase(email);
    return teachers;
  }
);

export const addFavoriteTeacher = createAsyncThunk(
  "favorites/addFavoriteTeacher",
  async ({ email, teacher }) => {
    const newFavorite = await addFavoriteToUserFirebase(email, teacher);
    return newFavorite;
  }
);

export const removeFavoriteTeacher = createAsyncThunk(
  "favorites/removeFavoriteTeacher",
  async ({ email, teacherId }) => {
    await removeFavoriteFromUserFirebase(email, teacherId);
    return teacherId;
  }
);

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoriteTeachers: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearFavoriteTeachers(state) {
      state.favoriteTeachers = [];
    },
  },
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
      })
      .addCase(addFavoriteTeacher.fulfilled, (state, action) => {
        state.favoriteTeachers.push(action.payload);
      })
      .addCase(removeFavoriteTeacher.fulfilled, (state, action) => {
        state.favoriteTeachers = state.favoriteTeachers.filter(
          (teacher) => teacher.id !== action.payload
        );
      });
  },
});

export const { clearFavoriteTeachers } = favoritesSlice.actions;
export default favoritesSlice.reducer;
