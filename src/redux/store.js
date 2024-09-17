import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import teachersReducer from "./teachersSlice";
import userReducer from "./userSlice";
import favoritesReducer from "./favoritesSlice";

const persistConfig = {
  key: "user",
  storage,
  whitelist: ["name", "email", "token", "id"],
};

const favoritesPersistConfig = {
  key: "favorites",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedFavoritesReducer = persistReducer(
  favoritesPersistConfig,
  favoritesReducer
);

const store = configureStore({
  reducer: {
    teachers: teachersReducer,
    user: persistedUserReducer,
    favorites: persistedFavoritesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
