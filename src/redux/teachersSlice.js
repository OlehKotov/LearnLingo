import { createSlice } from "@reduxjs/toolkit";
import { fetchTeachers } from "./teachersOps";

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    items: [],
    loading: false,
    error: null,
    lastVisible: null,
    hasFetched: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...state.items, ...action.payload.teachers];
        state.lastKey = action.payload.lastKey;
        state.hasFetched = true;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default teachersSlice.reducer;
