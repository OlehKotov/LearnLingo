import { configureStore } from '@reduxjs/toolkit';
import teachersReducer from './teachersSlice';
import userReducer from './userSlice';
import favoritesReducer from './favoritesSlice';

const store = configureStore({
  reducer: {
    teachers: teachersReducer,
    user: userReducer,
    favorites: favoritesReducer,
  },
});

export default store;


