import { configureStore } from '@reduxjs/toolkit';
import teachersReducer from './teachersSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    teachers: teachersReducer,
    user: userReducer,
  },
});

export default store;


