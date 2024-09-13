import { createSlice } from '@reduxjs/toolkit';
import { fetchTeachers } from './teachersOps';

const teachersSlice = createSlice({
  name: 'teachers',
  initialState: {
    data: [],
    loading: false,
    error: null,
    visibleCount: 4,
  },
  reducers: {
    incrementVisibleCount: (state) => {
      state.visibleCount += 4;
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
        state.data = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { incrementVisibleCount } = teachersSlice.actions;

export default teachersSlice.reducer;