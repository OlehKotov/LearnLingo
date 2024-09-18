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
    filters: {
      languages: null,
      levels: null,
      price_per_hour: null,
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = {
        languages: null,
        levels: null,
        price_per_hour: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...state.items, ...action.payload.teachers];
        state.lastVisible = action.payload.lastKey;
        state.hasFetched = true;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilters, clearFilters } = teachersSlice.actions;

export default teachersSlice.reducer;
